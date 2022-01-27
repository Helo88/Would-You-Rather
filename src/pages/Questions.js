import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { UnAnsweredQuestion } from "../components/unAnsweredQuestion";
import { AnsweredQuestion } from "../components/AnsweredQuestion";

export const Questions = () => {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
  const location = useLocation();
  const { id } = useParams();
  console.log("Ques id is ", id);
  const Ques = useSelector((state) => state.getAnsweredQsReducer);
  console.log("Quwa", Ques);
  //const [flag,setFlag] =useState(false)
  let flag = false;
  for (let i = 0; i < Ques.length; i++) {
    if (id === Ques[i].id) {
      console.log("found");
      flag = true;
      break;
    }
  }

  return (
    <>{flag ? <AnsweredQuestion id={id} /> : <UnAnsweredQuestion id={id} />}</>
  );
};
