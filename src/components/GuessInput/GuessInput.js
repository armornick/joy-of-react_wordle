import React, { useState } from 'react';

const ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const VirtualKeyboard = ({ addLetter, guessedChars }) => {

  
  return (
    <div className='keyboard'>
      {ALL_LETTERS.split('').map(letter => 
        <button 
          key={letter} 
          className={`keyboard-key ${guessedChars[letter] ?? ''}`}
          onClick={() => addLetter(letter)}
        >
            {letter}
        </button>
      )}
    </div>
  )
}

function GuessInput({ submitGuess, guessedChars }) {
  const [guess, setGuess] = useState('');

  const addLetter = (letter) => {
    if (guess.length >= 5) {
      return;
    }
    setGuess(guess + letter);
  };

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={e => {
        e.preventDefault();
        submitGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input 
        id="guess-input" 
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern='[A-Z]{5}'
        value={guess}
        onChange={
          e => setGuess(e.target.value.toUpperCase())
        }
      />
      <VirtualKeyboard addLetter={addLetter} guessedChars={guessedChars} />
    </form>
  );
}

export default GuessInput;
