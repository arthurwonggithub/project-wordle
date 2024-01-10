import React from 'react';
import {range} from '../../utils'
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

function Guess({previousGuesses, answer}) {
  return <div className="guess-results">
    {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
        let temp = [ { letter: '', status: '' },{ letter: '', status: '' },{ letter: '', status: '' },{ letter: '', status: '' },{ letter: '', status: '' }];
        if (previousGuesses.length > num) {
           temp = Array.from(checkGuess(previousGuesses[num],answer));
        }
        return (
        <p key={num} className="guess">
          {temp.map((item,  idx2) => (
              <span key={`${num}-${idx2}`} className={`cell ${item.status}`}>{item.letter}</span>
          ))}
        </p>
        )
      })}
    </div>
}

export default Guess;
