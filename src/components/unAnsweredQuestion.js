import { useSelector, useDispatch } from "react-redux";
import { useHistory,useLocation ,useParams} from "react-router-dom";
import { useState } from "react";
import { _saveQuestionAnswer } from "../Data";
import {answerNewQuestion,popQuestion} from '../actions'

export const UnAnsweredQuestion = ({id }) => {
  const location =useLocation();
   const dispatch =useDispatch();


  // const searchParams = new URLSearchParams(search)
  const [flag ,setFlag]=useState(false)
  const q =useSelector((state) => {
    return state.getQuestionsReducer.filter((q) => q.id === id)[0];
  });
  console.log("hello unanswered");
  // author of ques
  const user = useSelector((state) => {
    return state.getUsersReducer.filter((u) => u.id === q.author)[0];
  });
  const authUser = useSelector((state) => state.authReducer);
  const history = useHistory();
  // keep 'em controlled
  const [opt, setOpt] = useState(q.optionOne.text);
  const [optionNum, setOptionNum] = useState("optionOne");
  function handleClick() {
    const newQ={}
    console.log(
      "this is op",optionNum
    )
    newQ[q.id]=optionNum
   _saveQuestionAnswer(authUser.id, q.id, optionNum).then(()=>{
     function run(){
    dispatch({
      type:answerNewQuestion,
      payload:q
    })
    dispatch({
      type:popQuestion,
      payload:q
    })
    dispatch({
      type:"user_question",
      payload:newQ
    })
      console.log("ansered")
      history.push(`/questions/${id}`)
  }
run()
     }  )

  }
  return (
    <>
      <div
        className="p-3  mb-2 "
        style={{
          border: "none",
          backgroundColor: "transparent",
          borderBottom: "2px dotted white",
          backgroundImage: `url(${authUser.bgUrl})`,
          backgroundPosition: "right right",
          backgroundAttachment:"fixed",
          width:"100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height:"100%",
          minHeight:"100vh",
          position:"relative"
          
        }}
      >
        
          <div className=" card d-flex flex-row  border-0 align-items-center col-md-6 col-12 mt-5 p-3"
            style={{
              backdropFilter: "blur(5px)",
              backgroundColor:"transparent",
              position:"absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}>
            <img
              className="card-img-top"
              src={user.avatarURL}
              style={{
                width: "100px",
                height: "150px",
                // borderRadius: "100%",
                backgroundColor: "transparent",
              }}
              alt="Card image"
            />
            <div className="card-body"
            style={{}}>
              <h5 className="card-title">
                {" "}
                {user.id}
                <span className="text-light px-2">asks would you rather</span>
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
                  onChange={(e) => {
                    console.log("option 1 is ", e.target.value);
                    setOpt(e.target.value);
                    setOptionNum("optionOne");
                  }}
                  checked={opt === q.optionOne.text}
                />
                {q.optionOne.text}
                <label
                  className="form-check-label"
                  htmlFor={q.optionOne.text}
                ></label>
                <br></br>

                <input
                  type="radio"
                  className="form-check-input"
                  id={q.optionTwo.text}
                  name={q.optionTwo.text}
                  value={q.optionTwo.text}
                  onChange={(e) => {
                    console.log("option 2  ", e.target.value);
                    setOpt(e.target.value);
                    setOptionNum("optionTwo");
                  }}
                  checked={opt === q.optionTwo.text}
                />
                {q.optionTwo.text}
                <label
                  className="form-check-label"
                  htmlFor={q.optionTwo.text}
                ></label>
              </div>

              <button
                className=" mt-1 btn border border-2 border-light w-100  "
                onClick={() => {
                  handleClick();
                }}
              >
                Submit
              </button>
            </div>
        
        </div>
      </div>
    </>
  );
};
