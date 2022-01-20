import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const AnsweredQuestion = ({ q }) => {
  // user answers of ques
  const authUser = useSelector((state) => state.authReducer);
  const allAnQues = useSelector((state) => state.getAnsweredQsReducer);
  // get question corsponding index in user answers
  let QuesIndex;
  let selectedOption;
  // statics
  const totalNumVotes = q.optionOne.votes.length + q.optionTwo.votes.length;
  const optionOneRatio = parseInt(
    (q.optionOne.votes.length / totalNumVotes) * 100
  );
  const optionTwoRatio = parseInt(
    (q.optionTwo.votes.length / totalNumVotes) * 100
  );

  const user = useSelector((state) => {
    return state.getUsersReducer.filter((u) => u.id === q.author)[0];
  });

  for (let i = 0; i < authUser.answers.length; i++) {
    if (Object.keys(authUser.answers[i]) == q.id) {
      QuesIndex = i;
      // get answer
      selectedOption = Object.values(authUser.answers[QuesIndex]);
      break;
    }
  }

  console.log(QuesIndex);
  return (
    <>
      <div
        className="card d-flex flex-row align-items-center p-0 col-md-9 col-12"
        style={{
          border: "none",
          backgroundColor: "transparent",
          borderBottom: "2px dotted white",
        }}
      >
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
        <div className="card-body">
          <h5 className="text-light">
            <span className="text-dark pe-2">{q.author} </span>
            asks would you rather
          </h5>
          {/* rgb(200,102,253) */}
          {/* <p className="mb-1 mt-1 p-2 d-inline-block"
          //   style={{boxShadow:selectedOption =="optionOne" ?"-1px 1px 4px 6px white":"none",
          //     width:selectedOption =="optionOne" ?"100%"  :"fit-content" ,
          //     textAlign:selectedOption =="optionOne" ?"center"  :"left"      
          // }}
            >
            {q.optionOne.text}</p> */}
          <input
            type="radio"
            className="form-check-input me-2 my-2"
            id={q.optionOne.text}
            checked={selectedOption == "optionOne" ? "true" : ""}
          />
          {q.optionOne.text}
          <label
            className="form-check-label"
            htmlFor={q.optionOne.text}
          ></label>
          <div className="progress" style={{ height: "15px" }}>
            <div
              className="progress-bar"
              style={{
                width: `${optionOneRatio}%`,
                height: "100%",
                backgroundColor: "rgb(169,169,169)",
              }}
            ></div>
          </div>

          <small
            className=" d-block  text-light text-center mb-1"
            style={{ fontSize: "10px" }}
          >
            {q.optionOne.votes.length} out of {totalNumVotes} votes
            <span className="px-2"> </span>
            {optionOneRatio}%
          </small>

          {/* {selectedOption == "optionTwo" ? "text-light" : ""} */}

          <input
            type="radio"
            className="form-check-input me-2 my-2"
            id={q.optionTwo.text}
            checked={selectedOption == "optionTwo" ? "true" : ""}
          />
          {q.optionTwo.text}
          <label
            className="form-check-label"
            htmlFor={q.optionTwo.text}
          ></label>

          <div className="progress" style={{ height: "15px" }}>
            <div
              className="progress-bar"
              style={{
                width: `${optionTwoRatio}%`,
                height: "100%",
                backgroundColor: "rgb(169,169,169)",
              }}
            ></div>
          </div>

          <small
            className=" d-block  text-light text-center"
            style={{ fontSize: "10px" }}
          >
            {q.optionTwo.votes.length} out of {totalNumVotes} votes
            <span className="px-2"> </span>
            {optionTwoRatio}%
          </small>

          {/* <p>{q.id}</p> */}
          {/* <p>{Object.values(authUser.answers[QuesIndex])}</p> */}
          {/* <p>{totalNumVotes}</p> */}
        </div>
      </div>
    </>
  );
};
