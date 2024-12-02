import React from 'react';

function GameOverBanner({ win, guesses, answer, restartGame }) {

  const message = win
    ? (<p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{guesses.length} guesses</strong>.
    </p>)
    : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>;

  return (
    <div className={`${win ? 'happy' : 'sad'} banner`}>
      {message}
      <button className='restart-game-button' onClick={restartGame}>
        Restart game
      </button>
    </div>
  )
}

export default GameOverBanner;
