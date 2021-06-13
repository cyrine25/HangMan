import { GET_WORD_FAILURE, GET_WORD_SUCCESS } from "../actionsTypes/wordsActionTypes";


const initialState = {
    selectedWord: '',
  };

const wordReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case GET_WORD_SUCCESS:
        return {...state,selectedWord:payload[0].word.toLowerCase()}
    case GET_WORD_FAILURE:
        return {...state}
   

    default:
        return state;
}
}
export default wordReducer

