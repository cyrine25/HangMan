import { useEffect, useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
// import "./App.css";
import { getWords } from "./js/actions/wordsActions";
import Word from "./components/word/Word";
import WrongWord from "./components/wrongWord/WrongWord";
import Popup from "./components/popUp/PopUp";
import HangmanBody from "./components/HangmanBody/HangmanBody"

function App() {
  const dispatch = useDispatch();
  const [correctLetters, setCorrectLetters] =
    useState([]);
  const [wrongLetters, setWrongLetters] =
    useState([]);
  const [playable, setPlayable] = useState(true);

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);
  const selectedWord = useSelector(
    (state) => state.wordReducer.selectedWord
  );
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (
        playable &&
        keyCode >= 65 &&
        keyCode <= 90
      ) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(
              (currentLetters) => [
                ...currentLetters,
                letter,
              ]
            );
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [
              ...currentLetters,
              letter,
            ]);
          }
        }
      }
    };
    window.addEventListener(
      "keydown",
      handleKeydown
    );
    return () =>
      window.removeEventListener(
        "keydown",
        handleKeydown
      );
  }, [
    correctLetters,
    wrongLetters,
    playable,
    selectedWord,
  ]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    dispatch(getWords())
  }
  console.log(selectedWord);
  return (
    <div className="game">
      <HangmanBody wrongLetters={wrongLetters}/>
      <Word correctLetters={correctLetters} />
      <WrongWord wrongLetters={wrongLetters} />
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
    </div>
  );
}

export default App;
