
import { getAllMyUsers } from "../../actions";

const INITIAL_STATE = []

  export function getAllUsers(state = INITIAL_STATE, action) {
    switch (action.type) {
      case getAllMyUsers:
       //console.log(action)
      //  without ...state cuaz each time will add the 4 users again
        return [...action.payload]
        
      default:
      // console.log("default firs",state)
        return state;
    }
  }