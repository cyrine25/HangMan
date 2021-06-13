import axios from "axios";
import { GET_WORD, GET_WORD_FAILURE, GET_WORD_SUCCESS } from "../actionsTypes/wordsActionTypes";



export const getWords=()=>async(dispatch)=>{
dispatch ({type:GET_WORD,})
try {
    const {data}=await axios.get("https://random-words-api.vercel.app/word");
    dispatch({
        type:GET_WORD_SUCCESS,
        payload:data,
    });
} catch (error) {
    dispatch({
        type:GET_WORD_FAILURE
    })
}
}



