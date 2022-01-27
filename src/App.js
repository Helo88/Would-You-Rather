import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory ,useLocation,useParams,Redirect } from "react-router-dom";
import LoadingBar from 'react-redux-loading-bar';

import "./App.css";
import { Home } from "./pages/home"
import { UserHome } from "./pages/userHome";
import { WrongRoute } from "./pages/UserError";
import { LeaderBoard } from "./pages/LeaderBoard";
import { NavBar } from "./components/navBar";
import { Questions } from "./pages/Questions";
import { NewQuestion } from "./pages/NewQuestion";

function App() {
  
  const location = useLocation();
  const history=useHistory();
   console.log("location is ",location)
   const authUser= useSelector((state)=>state.authReducer)

  
   if(location.pathname!=="/login" && (location.pathname!=="/notfound")      )
   localStorage.setItem('rememberMe', location.pathname);
  return (
<>
{/* <LoadingBar /> */}

     <Switch> 
     <Route path={"/notfound"}  exact={true} component={WrongRoute} />
     <Route path={"/login"}  exact={true} component={Home} />

     
       {authUser.id?
       <>
       <NavBar/>
       <Switch>
       
      <Route path={"/"} exact={true} component={UserHome} />
      <Route path={"/questions/:id"} exact={true} component={Questions}/>
      <Route path={"/add"} exact={true} component={NewQuestion} />
      <Route path={"/leaderboard"} exact={true} component={LeaderBoard} />
      <Redirect to="/notfound"/>
     </Switch>
     </>
   :
   <Home/>
   
   }
   
</Switch> 

</>
  );
}

export default App;
