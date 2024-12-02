import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Letter = ({ value, result }) => (
  <span className={`cell ${ result ? result.status : '' }`}>
    {value}
  </span>
)

function Guess({ guess, answer }) {
  const guessResult = guess ? checkGuess(guess, answer) : [];

  return (
    <p className='guess'>
      {range(5).map(index =>
        <Letter 
          key={index} 
          value={guess ? guess[index] : undefined} 
          result={guessResult[index]}
        />
      )}
    </p>
  );
}

export default Guess;
