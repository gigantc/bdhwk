import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import './PasswordGate.scss';

const PasswordGate = ({ onAuth }) => {

  const [input, setInput] = useState('');
    const [showError, setShowError] = useState(false);

  //password list
  const approvedPasswords = {
    friend: 'Friend',
    carr0t: 'Creator',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (approvedPasswords.hasOwnProperty(input)) {
      const label = approvedPasswords[input];

      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('authLabel', label);

      await addDoc(collection(db, 'visitors'), {
        name: label,
        timestamp: new Date().toISOString(),
      });

      onAuth();
    } else {
      setShowError(true);
      setInput('');
    }
  };

  return (
    <>
    <div className="password-gate">
      <div className="form-area">
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
          <button type="submit">Log In</button>
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