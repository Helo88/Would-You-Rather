import {AnsweredQuestion} from "./AnsweredQuestion";
import {UnAnsweredQuestion} from "./unAnsweredQuestion";
import { UnAnswers } from "./unanswers";
export const UserDash =({allQues , qState})=>{
// console.log("all form me " +JSON.stringify(allQues))
console.log("hello from userDash")
    return <>
    <ul className="col-md-8 col-12 ">
        {qState==="unanswered"
        ? allQues.map((Q)=>{
         return <UnAnswers id={Q.id} text={Q.optionOne.text} author={Q.author} key= {Q.id}/>
        })
        :
        allQues.map((Q)=>{
          return  <UnAnswers  id={Q.id} text={Q.optionTwo.text}  author={Q.author} key= {Q.id} />
        })

    }
    </ul>

    </>
}