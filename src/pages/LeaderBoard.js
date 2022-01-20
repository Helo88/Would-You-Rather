import { NavBar } from "../components/navBar";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { WrongRoute } from "./UserError";
import { authenticatedUser } from "../actions";

export const LeaderBoard = ({ }) => {
  console.log(" hello from leader board");
   const history =useHistory()
  const users = useSelector((state) => state.getUsersReducer);
  ///////////////////////////////
  const user = useSelector((state) => state.authReducer);
  if (user.id) { }
  else { history.push("/notfound") }

  const usersStatics = [];
  for (let i = 0; i < users.length; i++) {
    let obj = {};
    obj.avatar = users[i].avatarURL;

    obj.id = users[i].id;
    obj.questions = users[i].questions.length;
    console.log("ques " + obj.questions);
    obj.answeredQues = users[i].answers.length;
    obj.contributions = obj.questions + obj.answeredQues;
    console.log(obj.contributions);
    usersStatics.push(obj);
  }
  //sort the array of objs depends on contribution
  usersStatics.sort((a, b) => b.contributions - a.contributions);
  return (
    <div
      className="p-3 py-5 col-md-7 col-12"
      style={{
        backgroundImage: `url("/assets/images/kagome.png")`,
        backgroundPosition: " 0px 30px",
        backgroundAttachment: "fixed", //console.log("user ques ",JSON.stringify(allQues))
        width: "100vw",
        backgroundColor: "#5EB272",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        height: "fit-content",
      }}
    >
      {/* <NavBar user={user} highlight="leaderboard" /> */}
      {usersStatics.map((user, index) => {
        return (
          <div key={user.id}
            className="card d-flex flex-row align-items-center mt-5 col-md-6 col-12 shadow-lg position-relative"
            style={{ background: "transparent" }}
          >
            <img
              className="card-img pe-3"
              src={user.avatar}
              style={{
                width: "100px",
                height: "200px",
                // borderRadius: "100%",
                backgroundColor: "transparent",
              }}
              alt={user.id}
            />
            <div
              className="card-body h-100 "
              style={{ borderLeft: "1px solid black" }}
            >
              <div className="w-75 d-inline-block p-2 ">
                <h2 className="text-light">{user.id}</h2>
                <p className="mb-1 mt-3">
                  <span className="">Answered Questions</span>{" "}
                  {user.answeredQues}
                </p>
                <p>
                  <span>Created Questions</span> {user.questions}{" "}
                </p>
                <img className={index == 0 || index == usersStatics.length - 1 ? "" : "d-none"}
                  src={index == 0 ? "/assets/images/shiii.png" : "/assets/images/sho.png"}
                  style={{
                    width: "180px",
                    height: "150px",
                    borderRadius: "100%",
                    position: "absolute",
                    bottom: "-13px",
                    right: "20%",
                  }}
                ></img>
              </div>
              <div className="w-25 py-4 d-inline-block text-center " style={{}}>
                <h5>Score</h5>
                <div
                  className="mx-auto my-3"
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "2px dotted black",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                >
                  {user.contributions}{" "}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
