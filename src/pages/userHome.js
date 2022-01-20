import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams, Link } from "react-router-dom";
import { NavBar } from "../components/navBar";
import { getAllMyQuestions ,authenticatedUser} from "../actions";
import {_getQuestions} from  "../Data";
import { DashBoard } from "./DashBoard";
import { WrongRoute } from "./UserError";


export const UserHome = () => {

  const dispatch = useDispatch();
  const history=useHistory();
  const [questions, getQuestions] = useState([]);
   
  console.log("hello from userhome")
  let { id } = useParams();
  const findUsers = useSelector((state) => state.getUsersReducer)
  const user = useSelector((state) => { return state.getUsersReducer.filter((u) => u.id === id)[0]})
  if (JSON.stringify(user)){}
  else {history.push("/notfound")}

  useEffect(() => {
    const fetchQuestions = () => {
      _getQuestions()
        .then((res) => {
          getQuestions([...res]);
           console.log(res)
        })
        .catch((err) => console.log(err));
    };
    fetchQuestions ();

    
  }, []);
  useEffect(()=>{
    console.log("hello from user auty efrf")
    dispatch({
      type:authenticatedUser,
      payload: user
      })
  },[user])

  useEffect(() => {
    dispatch({
       type:getAllMyQuestions,
       payload:questions
    })
  }, [questions]);

  return (
  

    <DashBoard />
    
      /* {JSON.stringify(user)?
       <DashBoard /> 
        :
        <WrongRoute />
      } 
    </> */

  )

}