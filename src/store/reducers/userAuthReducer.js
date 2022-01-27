
import { authenticatedUser ,unauthenticatedUser } from "../../actions";

const INITIAL_STATE = {}

  export function changeauthenticatedUser(state = INITIAL_STATE, action) {
    switch (action.type) {
      case authenticatedUser:
        // state.lang = action.payload xxxxx
        return {
          ...action.payload
        }; 
        case unauthenticatedUser:
          return {};
        case "user_question":
          return {
            ...state,
            ...state.answers.push(action.payload)
          }
      default:
    //    console.log("default firs",state)
        return state;
    }
  }
  