import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Qoption } from "./option";
import {  _saveQuestionAnswer } from "../Data"
export const UnAnsweredQuestion = ({q})=>{
  const [flip,setFlip] = useState(0);
  console.log("hello unanswered")
  // author of ques
const user = useSelector((state) => { return state.getUsersReducer.filter((u) => u.id === q.author)[0]})
const authUser = useSelector((state) => state.authReducer)

// keep 'em controlled
const [opt, setOpt] = useState(q.optionOne.text);
const [optionNum, setOptionNum] = useState("optionOne");
 function handleClick(){
  //  save answer 
 
  _saveQuestionAnswer(authUser,q.id,optionNum)
  .then( )
 }


//  useEffect(() => {
//   const fetchUsers = () => {
//     _getUsers()
//       .then((res) => {
//         getUsers([...res]);
//         // console.log(res)
//       })
//       .catch((err) => console.log(err));
//   };
//   fetchUsers();
// }, []);
return (
   <>

<div className="card d-flex flex-row align-items-center p-0 col-md-9 col-12" 
style={{border:"none" ,backgroundColor:"transparent",borderBottom:"2px dotted white"}}>
  <img className="card-img-top" src={user.avatarURL}
    style={{
        width: "100px",
        height: "150px",
        // borderRadius: "100%",
        backgroundColor: "transparent",
      }}
   alt="Card image"/>
  <div className="card-body">
    <h5 className="card-title"> {user.id} 
    <span className="text-light px-2"> 
    
    asks would you rather
    </span>
    </h5>
    {/* <p className="card-text">{q.optionOne.text}</p>
    <p className="card-text">{q.optionTwo.text}</p> */}

   {/* <Qoption  data={q.optionOne} />
   <Qoption  data={q.optionTwo} /> */}


<div className="form-check">

<input 
type="radio"
 className="form-check-input"
id={q.optionOne.text} 
name={q.optionOne.text}
value={q.optionOne.text}
onChange={(e)=>
{console.log("option 1 is ",e.target.value)
setOpt(e.target.value)
setOptionNum("optionOne")
}}
checked={opt===q.optionOne.text}

/>{q.optionOne.text}
<label className="form-check-label" htmlFor={q.optionOne.text}></label>
<br></br>

<input 
type="radio"
className="form-check-input"
id={q.optionTwo.text} 
name={q.optionTwo.text}
value={q.optionTwo.text}
onChange={(e)=>
{console.log("option 2  ",e.target.value)
setOpt(e.target.value)
setOptionNum("optionTwo")
}}
checked={opt===q.optionTwo.text}
/>{q.optionTwo.text}
<label className="form-check-label" htmlFor={q.optionTwo.text}></label>
</div>









    <button 
    className=" mt-1 btn border border-2 border-light w-100"
    onClick={()=>{console.log("opt is ",opt);handleClick()}}
    >Submit</button>
  </div>
</div>

   
   
   
   </>


    )
}