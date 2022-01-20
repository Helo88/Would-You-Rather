import {AnsweredQuestion} from "./AnsweredQuestion";
import {UnAnsweredQuestion} from "./unAnsweredQuestion";

export const UserDash =({allQues , qState})=>{
// console.log("all form me " +JSON.stringify(allQues))
console.log("hello from userDash")
    return <>
    <ul className="col-md-8 col-12 ">
        {qState==="unanswered"
        ? allQues.map((Q)=>{
         return <UnAnsweredQuestion q={Q} key= {Q.id}/>
        })
        :
        allQues.map((Q)=>{
          return  <AnsweredQuestion  q={Q}  key= {Q.id} />
        })
       
    }
    </ul>
    
    </>
}