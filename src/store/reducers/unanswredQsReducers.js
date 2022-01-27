import {  getAllMyUnAnsweredQuestions,popQuestion} from "../../actions";

const INITIAL_STATE = []

  export function getAllUnAnsweredQuestions(state = INITIAL_STATE, action) {
    switch (action.type) {
      case getAllMyUnAnsweredQuestions:
        return [...action.payload]
      case popQuestion :
        return state.filter((q)=>q.id==action.payload.id)
      default:
    
        return state;
    }
  }