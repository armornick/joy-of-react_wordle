import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

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
  const [answer, setAnswer] = useState(() => {
    const initialAnswer = sample(WORDS);
    console.info({ answer: initialAnswer });
    return initialAnswer;
  });

  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState({ state: 'running' });
  const [guessedChars, setGuessedChars] = useState({});
  
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

    const nextGuessedChars = { ...guessedChars };
    const result = checkGuess(guess, answer);
    result.forEach(({ letter, status }) => (nextGuessedChars[letter] = status));
    setGuessedChars(nextGuessedChars);

    checkGameState(guess);
  }

  const restartGame = () => {
    const nextAnswer = sample(WORDS);
    console.info({ answer: nextAnswer });

    setAnswer(nextAnswer);
    setGuesses([]);
    setGameState({ state: 'running' });
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {
        gameState.state === 'running'
          ? <GuessInput submitGuess={submitGuess} guessedChars={guessedChars} />
          : <GameOverBanner 
              win={gameState.win} 
              guesses={guesses} 
              answer={answer} 
              restartGame={restartGame}
            />
      }
    </>
  );
}

export default Game;
