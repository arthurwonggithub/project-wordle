import {NUM_OF_GUESSES_ALLOWED} from "./constants";

export function checkResult(previousGuesses, answer)  {
        let result = 'InProgress'
        if (previousGuesses.length > 0 && previousGuesses.length <= NUM_OF_GUESSES_ALLOWED) {
            console.log(previousGuesses[previousGuesses.length - 1].toString() + ' length = ' + previousGuesses.length)
            if (previousGuesses[previousGuesses.length - 1].toString() === answer) {
                result = 'Win';
            } else {
                if (previousGuesses.length === NUM_OF_GUESSES_ALLOWED) {
                    result = 'Lose'
                }
            }
        }
        return result;
}