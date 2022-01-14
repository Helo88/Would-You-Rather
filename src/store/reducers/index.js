import { combineReducers } from "redux";
import { getAllAnsweredQuestions } from "./answredQsReducers";
import { getAllQuestions } from "./questionsReducer";
import { getAllUnAnsweredQuestions } from "./unanswredQsReducers";
import { changeauthenticatedUser } from "./userAuthReducer"
import { getAllUsers } from "./usersReducer";


export default combineReducers({
    authReducer:changeauthenticatedUser,
    getUsersReducer:getAllUsers,
    getQuestionsReducer:getAllQuestions,
    getAnsweredQsReducer:getAllAnsweredQuestions,
    getUnAnsweredQsReducer:getAllUnAnsweredQuestions

})