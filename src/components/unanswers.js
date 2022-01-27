import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { UnAnsweredQuestion } from  "./unAnsweredQuestion";
import { Pole } from "./pole";


export const UnAnswers = ({id,text,author})=>{

  // author of ques
const user = useSelector((state) => { return state.getUsersReducer.filter((u) => u.id === author)[0]})
const authUser = useSelector((state) => state.authReducer)
const history=useHistory()

 function handleClick(id){
  history.push(`questions/${id}`)
 }

return (
   
<div style={{  }}>

<Pole option={text} user={user}  />

 
 <button 
     className=" mt-1 btn border border-2 border-light col-md-9 col-12"
     onClick={()=>{handleClick(id)}}
   >View Poll
</button>

 

</div>

    )
}