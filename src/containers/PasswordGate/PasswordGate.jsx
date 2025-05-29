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
  const formAreaRef = useRef(null);


  //////////////////////////////////////
  //////////////////////////////////////
  // PASSWORD LIST
  useEffect(() => {
    fetch('/passwords.json')
      .then(res => res.json())
      .then(data => setApprovedPasswords(data))
      .catch(err => console.error('Failed to load password list', err));
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
    if (approvedPasswords.hasOwnProperty(input)) {
      const label = approvedPasswords[input];

      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('authLabel', label);

      //we don't want to log me.
      if (input !== 'carr0t' && label !== 'Creator') {
        await addDoc(collection(db, 'visitors'), {
          name: label,
          timestamp: new Date().toISOString(),
        });
      };
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