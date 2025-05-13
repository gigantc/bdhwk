import { useState } from 'react';
import './PAsswordGate.scss';

const PasswordGate = ({ onAuth }) => {

  const [input, setInput] = useState('');
    const [showError, setShowError] = useState(false);

  //password list
  const approvedPasswords = {
    friend: 'Friend',
    carr0t: 'Creator',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (approvedPasswords.hasOwnProperty(input)) {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('authLabel', approvedPasswords[input]);
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