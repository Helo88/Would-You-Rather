import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Option } from "../components/option";
import { _saveQuestion } from "../Data";
import { addNewQuestion } from "../actions";
export const NewQuestion = () => {
  const user = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  // JSON.stringify(user) here there is no ref  such as user.id so empty obj won't give error
  if (user.id){} 
  else {history.push("/notfound")}

  let optionOne = "";
  let optionTwo = "";

  function getOption1(option) {
    optionOne = option;
  }
  function getOption2(option) {
    optionTwo = option;
  }
  function handleClick(e) {
    e.preventDefault();
    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: user.id,
    };
    //console.log("optios : ",optionOne," ---- ",optionTwo)
    _saveQuestion(question).then((data) => {
      console.log(data);
      dispatch({
        type: addNewQuestion,
        payload: data,
      });
      history.push("/");
    });
  }

  return (
    <div
      className="p-3 py-5 "
      style={{
        backgroundImage: `url(${user.bgUrl})`,
        backgroundPosition: "right right",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"100%",
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflowY:"hidden"
      }}
    >
      <form
        className="p-3 pb-5 mx-auto border-dotted border-4 border-dark  shadow-lg col-md-6 col-12"
        style={{
          backdropFilter: "blur(5px)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <h2 className="mb-2 p-3 text-center">Create New Question</h2>
        <h4 className="text-light">Would you rather .....</h4>
        <Option getOption={getOption1} placeholder="Enter Option One" />
        <p className="text-center m-0 p-2 ">----OR----</p>
        <Option getOption={getOption2} placeholder="Enter Option Two" />

        <button
          className=" mt-1 btn border border-2 border-light w-100"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
