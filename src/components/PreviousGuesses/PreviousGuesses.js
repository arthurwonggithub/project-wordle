import React from 'react';

function PreviousGuesses({previousGuesses}) {
  console.log('previous guesses ' + JSON.stringify(previousGuesses))
  return <div>
    <ul>
      {previousGuesses.map((guess) => (
          <li>{guess}</li>
      ))}
    </ul>
  </div>;
}

export default PreviousGuesses;
