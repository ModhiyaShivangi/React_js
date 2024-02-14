import React from 'react';
import Customhook from './Customhook';

const Palindrome = () => {

  const [input,Palindrome,handleInputChange] = Customhook();

  return (
    <div>
      <h2>Palindrome Checker</h2>
      <label>
        Enter text:
        <input type="text" value={input} onChange={handleInputChange} />
      </label>
      <div>
        {Palindrome ? (
          <p>This is a palindrome!</p>
        ) : (
          <p>This is not a palindrome.</p>
          
        )}
      </div>
    </div>
  );
};

export default Palindrome;

