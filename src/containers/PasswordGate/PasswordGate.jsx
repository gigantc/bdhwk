import { useState, useRef, useEffect  } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import gsap from 'gsap';
import './PasswordGate.scss';



const PasswordGate = ({ onAuth }) => {
  
  //////////////////////////////////////
  // REFS & STATE
  const [input, setInput] = useState('');
  const [showError, setShowError] = useState(false);
  const [approvedPasswords, setApprovedPasswords] = useState({});
  const hasLoggedUrlVisitRef = useRef(false);
  const formAreaRef = useRef(null);



  //////////////////////////////////////
  //////////////////////////////////////
  // LOGS A USER TO FIREBASE

  //this just makes a nice readable platform
  const getPlatform = () => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) return 'Android';
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'iOS';
    if (/Win(dows)?/.test(ua)) return 'Windows';
    if (/Mac/.test(ua)) return 'macOS';
    if (/Linux/.test(ua)) return 'Linux';

    return 'Unknown';
  };


  // the actual log
  const logVisitorToFirebase = async (label, method) => {
    //get the platform
    const platform = getPlatform();

    await addDoc(collection(db, 'visitors'), {
      name: label,
      timestamp: new Date().toLocaleString(),
      method: method,
      platform: platform,
      userAgent: navigator.userAgent,
    });
    hasLoggedUrlVisitRef.current = true;
  };


  //////////////////////////////////////
  //////////////////////////////////////
  // PASSWORD LIST
  useEffect(() => {
    const checkUrlPassword = async () => {
      if (hasLoggedUrlVisitRef.current) return;

      try {
        const res = await fetch('/passwords.json');
        const data = await res.json();
        setApprovedPasswords(data);

        const params = new URLSearchParams(window.location.search);
        const passParam = params.get('p');

        if (passParam && data.hasOwnProperty(passParam)) {
          const label = data[passParam];
          localStorage.setItem('authenticated', 'true');
          localStorage.setItem('authLabel', label);
          onAuth();

          //we don't want to log me.
          if (passParam !== 'carr0t' && label !== 'Creator') {
            hasLoggedUrlVisitRef.current = true;
            await logVisitorToFirebase(label, 'url');
          }
        }
      } catch (err) {
        console.error('Failed to load password list', err);
      }
    };

    checkUrlPassword();
  }, []);


  //////////////////////////////////////
  // GSAP ANIMATION FUNCTION
  const runSubmitAnimation = (ref, callback) => {
    if (ref.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          callback();
        }
      });
      tl.to(ref.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.in"
      });
    } else {
      callback();
    }
  };


  //////////////////////////////////////
  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalized = input.toLowerCase();
    if (approvedPasswords.hasOwnProperty(normalized)){

      const label = approvedPasswords[input];

      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('authLabel', label);

      //we don't want to log me.
      if (input !== 'carr0t' && label !== 'Creator') {
        hasLoggedUrlVisitRef.current = true;
        await logVisitorToFirebase(label, 'password');
      }
      // GSAP animation for .form-area before calling onAuth
      runSubmitAnimation(formAreaRef, onAuth);
    } else {
      setShowError(true);
      setInput('');
    }
  };


  return (
    <>
    <div className="password-gate">
      <div className="form-area" ref={formAreaRef}>
        <h1>Welcome!</h1>
        <p>Please enter the password located on my resume.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            id="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowError(false);
            }}
            autoFocus
          />
          <button type="submit" className="cursorHover">Log In</button>
          {showError && 
          <p className="error">Incorrect password. <br />Please try again.</p>
          }
        </form>
      </div>
    </div>
    </>
  );
};

export default PasswordGate;