import { getAllMyAnsweredQuestions,answerNewQuestion } from "../../actions";

const INITIAL_STATE = []

  export function getAllAnsweredQuestions(state = INITIAL_STATE, action) {
    switch (action.type) {
      case getAllMyAnsweredQuestions:
        return [...action.payload]
        case answerNewQuestion:
          return [...state,action.payload]
      default:
    
        return state;
    }
  }