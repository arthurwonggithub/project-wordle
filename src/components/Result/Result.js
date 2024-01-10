import React from 'react';

function Result({previousGuesses, answer, result}) {
  let output;

  if (result === 'Win') {
    output = <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{previousGuesses.length} guesses</strong>.
      </p>
    </div>;
  } else {
    if (result === 'Lose') {
      output = <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>;
    } else {
      output = '';
    }
  }
  return output;
}

export default Result;
