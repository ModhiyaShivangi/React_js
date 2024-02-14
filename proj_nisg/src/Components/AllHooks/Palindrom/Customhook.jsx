import React, { useState } from 'react'

const Customhook = () => {

    const [input, setInput] = useState('');
    const [Palindrome, setPalindrome] = useState(false);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInput(text);
        const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); 
        const reversedText = cleanText.split('').reverse().join('');
        setPalindrome(cleanText === reversedText);
      };

  return ([input,Palindrome,handleInputChange])
}

export default Customhook
