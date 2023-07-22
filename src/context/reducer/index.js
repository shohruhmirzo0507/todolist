import { combineReducers } from "redux"
import counter from "./counter"
import word from "./word"
import todos from "./todos"
import edit from "./edit"

const rootReducer = combineReducers({
    water(){ return "Redux water" },
    counter: counter,
    word,
    todos,
    edit
})

export default rootReducer