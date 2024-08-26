"use client"
import React, { useState } from 'react'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/textrevealcard'

const Secret = () => {
  const [inputValue, setInputValue] = useState('');
  const [quote, setQuote] = useState('');
  const [showCard, setShowCard] = useState(false);
  const secretName = process.env.REACT_APP_SECRET_NAME;
  const secretMessage = process.env.REACT_APP_SECRET_MESSAGE;
  const secretName1 = process.env.REACT_APP_SECRET_NAME1;
  const secretMessage1 = process.env.REACT_APP_SECRET_MESSAGE1;


  const handleChange = (event:any) => {
    setInputValue(event.target.value);
    setShowCard(false);
  };


  const handleSubmit = async () => {
    if (inputValue === 'idiot123') {
        console.log(secretName)
      try {
        setQuote("Be yourself!");
        setShowCard(true);
      } catch (error) {
        console.error('Error fetching the quote:', error);
      }
    } else {
      alert('Incorrect input');
    }
  };

  return (
    <div className='py-10' id='experiences'>
      <h1 className='heading'>
        <span className='text-white'>Quote of the Day</span>
      </h1>

      {/* User input field */}<div className='w-full flex items-center justify-center mt-6 space-y-5'>
  <input
    className='text-white bg-transparent outline-0 text-4xl text-center p-2 font-bold'
    type="text"
    placeholder='Secret Password'
    id="textInput"
    value={inputValue}
    onChange={handleChange}
  />
  <div className="flex justify-center">
    <button
      onClick={handleSubmit}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-purple-100 bg-white dark:bg-[#242333] rounded-md group-hover:bg-opacity-0">
        Submit
      </span>
    </button>
  </div>
</div>



      {/* Text Reveal Card */}
      {showCard && (
        <div className="flex items-center justify-center bg-black-100 h-[40rem] rounded-2xl w-full">
          <TextRevealCard text="Mystery" revealText={quote}>
            <TextRevealCardTitle>
              Mystery
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              This is a text reveal card. Hover over the card to reveal the hidden text.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      )}
    </div>
  );
};

export default Secret;
