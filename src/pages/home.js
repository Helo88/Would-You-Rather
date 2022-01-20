import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getAllMyUsers ,addNewUser } from "../actions";
import { _getUsers } from "../Data";
import { _saveUser } from "../Data";

export const Home = () => {
  const dispatch = useDispatch();
  const [users, getUsers] = useState([]);
  const [flip,setFlip]=useState(false)
  const history = useHistory();
  // let newUsers=
  // [{name:"Mirako",avatar:"miroo.png",bg:"mirako.png"},
  // {name:"Kagora",avatar:"kagoraa.png",bg:"kago.png"}]
  // let f=newUsers
  //console.log("my action " ,getAllMyUsers)
  useEffect(() => {
    const fetchUsers = () => {
      _getUsers()
        .then((res) => {
          console.log("this is users ",users)
          getUsers([...res]);
        
          // console.log("nr=ew users ",newUsers )
        })
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, );

  
  function handleClick(id) {
    dispatch({
      type: getAllMyUsers,
      payload: users,
    });
    console.log(id);
    history.push(`/${id}`);
  }
  //console.log(users)
  return (
    <div
      className=" container-fluid p-2 "
      style={{
        backgroundColor: "rgb(168,29,24)",
        backgroundAttachment:"fixed",
        background: "url(/assets/images/logo3.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight:"120vh",
        height: "fit-content"
      }}
    >
      <h2 className="mb-2 text-dark w-50 mt-5 p-2">
        WOULD YOU RATHER WITH INUYASHA ??
      </h2>
      <div className="dropdown ms-5">
        <button
          type="button"
          className=" mt-3 btn  dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Select User
        </button>
        <ul
          className="dropdown-menu"
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          {users.map((user) => {
            return (
              <li
                key={user.id}
                className="dropdown-item px-3 "
                onClick={() => {
                  handleClick(user.id);
                }}
              >
                <img
                  src={user.avatarURL}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                    backgroundColor: "transparent",
                  }}
                />
                <a className="text-decoration-none ms-3 text-dark">{user.id}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="dropdown ms-5">
        <button
          type="button"
          className=" mt-3 btn  dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Add New User
        </button>
        <ul
          className="dropdown-menu"
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          {f.map((user) => {
            return (
              <li
                key={user.name}
                className="dropdown-item px-3 "
                onClick={() => {
                  _saveUser(user).then((data)=>{
                  dispatch({
                    type:addNewUser,
                    payload:data
                  })
                  setFlip(!flip)
                  handleClick(user.name)
                  }).catch((err)=>{console.log("error")})
                  
                }}
              >
                <img
                  src={`/assets/images/${user.avatar}`}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                    backgroundColor: "transparent",
                  }}
                />
                <a className="text-decoration-none ms-3 text-dark">{user.name}</a>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};
//export default Home;
