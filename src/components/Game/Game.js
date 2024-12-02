import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const isGuessCorrect = (guess, answer) => {
  const result = checkGuess(guess, answer);
  for (const letter of result) {
    if (letter.status !== 'correct') {
      return false;
    }
  }
  return true;
}

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState({ state: 'running' });
  
  const checkGameState = (guess) => {
    if (isGuessCorrect(guess, answer)) {
      setGameState({ state: 'end', win: true });
    }
    // guesses is the old state so we have to increment length
    else if ((guesses.length + 1) === NUM_OF_GUESSES_ALLOWED) {
      setGameState({ state: 'end', win: false });
    }
  }

  const submitGuess = (guess) => {
    console.log({ guess });
    setGuesses([ ...guesses, guess ]);
    checkGameState(guess);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {
        gameState.state === 'running'
          ? <GuessInput submitGuess={submitGuess} />
          : <GameOverBanner win={gameState.win} guesses={guesses} answer={answer} />
      }
    </>
  );
}

export default Game;
