import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessList({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(index => {
        const guessAtIndex = guesses[index];
        return <Guess key={index} guess={guessAtIndex} />
      })}
    </div>
  )
}

export default GuessList;
