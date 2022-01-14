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
  const [questions, getQuestions] = useState([]);
   
  console.log("hello from userhome")
  let { id } = useParams();
  // check if user logins there [some users users in buffer]
  const findUsers = useSelector((state) => state.getUsersReducer)
  //console.log(findUsers.length)
  // get this user data
   const user = useSelector((state) => { return state.getUsersReducer.filter((u) => u.id === id)[0]})
  //console.log("user HOme ", user , "---  ",`${user.bgUrl}`)

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

    dispatch({
    type:authenticatedUser,
    payload: user
    })
  }, []);
  useEffect(() => {
    dispatch({
       type:getAllMyQuestions,
       payload:questions
    })
  }, [questions]);

  return (
    <>
    {/* not logined in */}
      {findUsers.length === 0 ?


        <WrongRoute />
        :
        <DashBoard user={user}/>

      }
    </>

  )

}