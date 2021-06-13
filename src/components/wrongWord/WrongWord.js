import React from "react";
import "./WrongWord.scss"
const WrongWord = ({ wrongLetters }) => {
  return (
    <div className="missed-letters">
      
        {wrongLetters.length > 0 && <p className="title">You Missed</p>}
        {wrongLetters
          .map((letter, i) => (
            <div key={i}>{letter}</div>
          ))
          .reduce(
            (prev, curr) =>
              prev === null
                ? [curr]
                : [prev, curr],
            null
          )}
     
    </div>
  );
};

export default WrongWord;
