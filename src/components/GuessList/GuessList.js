import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessList({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(index => {
        const guessAtIndex = guesses[index];
        return <Guess key={index} guess={guessAtIndex} answer={answer} />
      })}
    </div>
  )
}

export default GuessList;
