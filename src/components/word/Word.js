import React from "react";
import {
  useSelector,
} from "react-redux";
import "./Word.scss"


const Word = ({ correctLetters }) => {
 const selectedWord = useSelector(state => state.wordReducer.selectedWord)

  return (
    <div className="list">

      {selectedWord.split("").map((letter,index) => {
        return (
          <span className="text" key={index}>
            {correctLetters.includes(letter)
              ? letter
              : ""}
          </span>
        );
      })}
      
    </div>
  );
};

export default Word;
