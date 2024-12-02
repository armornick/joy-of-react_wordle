import React from 'react';

function Guess({ guess }) {
  return (
    <p className='guess'>
      <span className='cell'>{ guess ? guess[0] : ''}</span>
      <span className='cell'>{ guess ? guess[1] : ''}</span>
      <span className='cell'>{ guess ? guess[2] : ''}</span>
      <span className='cell'>{ guess ? guess[3] : ''}</span>
      <span className='cell'>{ guess ? guess[4] : ''}</span>
    </p>
  );
}

export default Guess;
