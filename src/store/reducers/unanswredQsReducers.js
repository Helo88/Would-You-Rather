import {  getAllMyUnAnsweredQuestions } from "../../actions";

const INITIAL_STATE = []

  export function getAllUnAnsweredQuestions(state = INITIAL_STATE, action) {
    switch (action.type) {
      case getAllMyUnAnsweredQuestions:
        return [...action.payload]
        
      default:
    
        return state;
    }
  }