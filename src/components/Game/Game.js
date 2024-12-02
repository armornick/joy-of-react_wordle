import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  
  const submitGuess = (guess) => {
    console.log({ guess });
    setGuesses([ ...guesses, guess ]);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
