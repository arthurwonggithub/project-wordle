import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

function InputWord({guess, setGuess, previousGuesses, setPreviousGuesses, gameResult}) {
    return <form className="guess-input-wrapper"
                 onSubmit={event => {
                     event.preventDefault();
                     if (guess.length >= 5) {
                         console.info({ guess });
                         let newPreviousGuesses = previousGuesses;
                         newPreviousGuesses.push(guess);
                         setPreviousGuesses(newPreviousGuesses.slice(0,NUM_OF_GUESSES_ALLOWED));
                         setGuess('');
                     }
                 }}
    >

        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text"
               maxLength={5}
               minLength={5}
               value={guess}
               disabled={gameResult !== 'InProgress'}
               onChange={event => {
                   let value = event.target.value.toUpperCase();
                   value = value.replace(/[^A-Za-z]/ig, '')
                   setGuess(value);
               }}
                   />

    </form>;
}

export default InputWord;
