import { getAllMyQuestions } from "../../actions";

const INITIAL_STATE = []

  export function getAllQuestions(state = INITIAL_STATE, action) {
    switch (action.type) {
      case getAllMyQuestions:
       //console.log(action)
      //  without ...state cuaz each time will add the 4 users again
        return [...action.payload]
        
      default:
      // console.log("default firs",state)
        return state;
    }
  }