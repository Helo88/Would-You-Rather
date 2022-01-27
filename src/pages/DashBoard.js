import { NavBar } from "../components/navBar"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { UserDash } from "../components/userDash";
import {getAllMyAnsweredQuestions , getAllMyUnAnsweredQuestions} from '../actions'
import { UnAnswers } from "../components/unanswers";

export const DashBoard =({})=>{
  console.log("hello frim Dashboard")
  const dispatch =useDispatch()

  const [answerdQs,viewAnsweredQs]=useState(false)
  // get all Questions

  const user = useSelector((state) => state.authReducer);
  const allQues = useSelector((state) => state.getQuestionsReducer)

  const answeredQues=[];
  const unAnsweredQues=[];
  let flag=false;

 for (let i=0;i<allQues.length;i++)
{  
  //console.log("lenn "+allQues.length +"- - "+user.answers.length)
  for( let j=0 ; j < user.answers.length ;j++){
    if(allQues[i].id == Object.keys(user.answers[j]))
    {
    //console.log ("i "+i+" j "+j+" "+"answerd" +" ---- "+ allQues[i].id ," ---- ",Object.keys(user.answers[j]))
    answeredQues.push(allQues[i])
     flag=true;
     break;
    }
    else {
    // console.log ("i "+i+" j "+j+" "+"unanswerd" +" ---- "+ allQues[i].id ," ---- ",Object.keys(user.answers[j]))
         flag=false
    }
  }
  if(flag===false) {
    unAnsweredQues.push(allQues[i])
  }
}
//  push them to reducers
 useEffect(()=>{
  dispatch({
    type:getAllMyAnsweredQuestions,
    payload:answeredQues
  })
 },[answeredQues])

 useEffect(()=>{
  dispatch({
    type:getAllMyUnAnsweredQuestions,
    payload:unAnsweredQues
  })
},[unAnsweredQues])
answeredQues.sort((a,b)=>new Date(b.timestamp) - new Date(a.timestamp))
unAnsweredQues.sort((a,b)=>new Date(b.timestamp) - new Date(a.timestamp))
//console.log("answered question ",JSON.stringify(answeredQues))
//console.log("\n\n")
//console.log("unAnswered question ",JSON.stringify(unAnsweredQues))

return (
<div className="p-3 py-5 col-md-8 col-12"
          style={{
            backgroundImage: `url(${user.bgUrl})`,
            backgroundPosition: "right right",
            backgroundAttachment:"fixed",
            width:"100vw",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight:"100vh",
            height: "fit-content"
          }}
        >
        
        <div className="row">
          <h2 className="mt-4 mb-1"> Dashboard </h2>
          <div className="mt-4 ">
             <div className="d-flex flex-row ">
              <button className="ps-3 btn shadow-lg"
               onClick={()=>{viewAnsweredQs(false)}}
              >UNANSWERED QUESTIONS
              <span className="bg-white  d-inline-block p-1 mx-2 rounded-circle"> {unAnsweredQues.length} </span>
              </button>
              <button className="p-1 btn shadow-lg"
              onClick={()=>{viewAnsweredQs(true)}}
              >ANSWERED QUESTIONS
               <span className="bg-white d-inline-block p-1 mx-2 rounded-circle"> {answeredQues.length} </span>
              </button>
             </div>
          </div>
          </div>
          {
          answerdQs ===true?
          <UserDash  allQues={answeredQues } qState={"answered"}/>
          :
          <UserDash  allQues={unAnsweredQues} qState={"unanswered"}/>
          }
          
          {/* {<UserDash  allQues={unAnsweredQues }/>  && !answerdQs} */}
        </div>


)
}