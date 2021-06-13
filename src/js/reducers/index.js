import { combineReducers } from "redux";
import wordReducer from "./wordsReducer";


const rootReducer = combineReducers({wordReducer});

export default rootReducer;