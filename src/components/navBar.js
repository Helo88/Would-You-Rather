import { useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { WrongRoute } from "../pages/UserError";

export const NavBar = ({}) => {
  const user = useSelector((state) => state.authReducer);
  let [highlight, setHighLight] = useState("dashboard");
  //let { id } = useParams();
  //console.log("this id user from nav",JSON.stringify(user.id))
  //console.log(JSON.stringify(user)===undefined?"yues":"ni")
  const history = useHistory();
  function handleClick() {
    history.goBack();
  }
  //console.log("hello user " ,JSON.stringify(user))
  return (
    <>
      {JSON.stringify(user) === undefined ? (
        <WrongRoute />
      ) : (
        <nav className="navbar fixed-top navbar-expand-sm p-0">
          <div className="container-fluid ">
            <a
              className="navbar-brand  text-dark "
              href="#"
              onClick={handleClick}
            >
              <img
                src="/assets/images/logoSS.png"
                id="logo"
                alt="go back "
                title="logo"
                style={{ width: "70px", height: "70px", borderRadius: "100%" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span>
                <i className="fas fa-bars textTheme"></i>
              </span>
            </button>

            <div
              className="collapse navbar-collapse p-0"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav  w-100  d-flex justify-content-end align-items-start p-0">
                <li
                  className="nav-item  mx-auto mx-md-0  text-center"
                  onClick={() => setHighLight("dashboard")}
                  style={{
                    borderBottom:
                      highlight == "dashboard" ? "2px solid black" : "",
                  }}
                >
                  <Link
                    className="nav-link d-block text-dark"
                    to={`/${user.id}`}
                  >
                    Dashboard
                  </Link>
                </li>

                <li
                  className="nav-item mx-auto mx-md-0 text-center"
                  onClick={() => setHighLight("newQues")}
                  style={{
                    borderBottom:
                      highlight == "newQues" ? "2px solid black" : "",
                  }}
                >
                  <Link
                    className="nav-link d-block text-dark"
                    to={`/${user.id}/newQuestion`}
                  >
                    New Question
                  </Link>
                </li>

                <li
                  className="nav-item mx-auto mx-md-0 text-center"
                  onClick={() => setHighLight("leaderboard")}
                  style={{
                    borderBottom:
                      highlight == "leaderboard" ? "2px solid black" : "",
                  }}
                >
                  <Link
                    className="nav-link d-block text-dark"
                    to={`/${user.id}/leaderboard`}
                  >
                    Leader Board
                  </Link>
                </li>

                <li className="nav-item  d-flex px-2">
                  <img
                    src={user.avatarURL}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "100%",
                      marginRight: "5px",
                    }}
                  />
                  <a className="nav-link d-block text-dark" href="#">
                    {user.id}
                  </a>
                </li>

                <li className="nav-item">
                  <Link to="/">
                    <i
                      className="bi bi-box-arrow-right d-block text-dark"
                      id="logout"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
