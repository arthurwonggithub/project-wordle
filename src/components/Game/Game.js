import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputWord from "../InputWord";

import Guess from "../Guess";
import Result from "../Result";
import {checkResult} from "../../check-result";


// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  return <>

    <Guess previousGuesses={previousGuesses} answer={answer}/>
  <InputWord  guess={guess} setGuess={setGuess}
             previousGuesses={previousGuesses} setPreviousGuesses={setPreviousGuesses}
              gameResult={checkResult(previousGuesses, answer)} />
    <Result previousGuesses={previousGuesses} answer={answer} result={checkResult(previousGuesses, answer)}/>
  </>;
}

export default Game;
