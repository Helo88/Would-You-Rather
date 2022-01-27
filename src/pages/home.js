import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getAllMyUsers ,addNewUser,authenticatedUser ,getAllMyQuestions} from "../actions";
import { _getUsers,_getQuestions } from "../Data";
import { _saveUser } from "../Data";

export const Home = () => {
  const [questions, getQuestions] = useState([]);
  const dispatch = useDispatch();
  const [users, getUsers] = useState([]);
  const [flip,setFlip]=useState(false)
  const history = useHistory();
  let flag=false
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

  useEffect(() => {
    dispatch({
       type:getAllMyQuestions,
       payload:questions
    })
  }, [questions]);

  
  function handleClick(user) {
    console.log(user)
    dispatch({
      type: getAllMyUsers,
      payload: users,
    });
    
    dispatch({
      type:authenticatedUser,
      payload: user
      })

     const rou= localStorage.getItem('rememberMe')
     if (rou.length >0 )
     {
      if (rou.indexOf("questions")!==-1)
      {
        const q=rou.split("/").slice(-1)[0]
        for ( let i=0 ;i<questions.length;i++)
        {
          if (questions[i].id==q){
              
              flag=true
              history.push(rou)
          }
          
        }
        if(flag==false){history.push("/notfound")}
      }
        else {
         history.push(rou)
        }
      }
      else {
        history.push("/")
      }
      
    }
  
  
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
                onClick={()=>handleClick(user)}
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
