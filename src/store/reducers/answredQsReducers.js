import { getAllMyAnsweredQuestions } from "../../actions";

const INITIAL_STATE = []

  export function getAllAnsweredQuestions(state = INITIAL_STATE, action) {
    switch (action.type) {
      case getAllMyAnsweredQuestions:
        return [...action.payload]
        
      default:
    
        return state;
    }
  }