import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, useHistory ,useLocation,useParams,Redirect } from "react-router-dom";
import { Home } from "./pages/home";
import "./App.css";
import { UserHome } from "./pages/userHome";
import { WrongRoute } from "./pages/UserError";
import { LeaderBoard } from "./pages/LeaderBoard";
import { NavBar } from "./components/navBar";
import { useEffect } from "react";
import { NewQuestion } from "./pages/NewQuestion";

function App() {
  const location = useLocation();
   console.log("location is ",location)
  return (
    
    <Switch>
    <Route path={"/notfound"}  exact={true} component={WrongRoute} />
    <Route>
    <div className="" style={{overflow:"hidden"}}>
      {/* location can be used like that if browser is wrapping App from outside */}
       {location.pathname === '/' ? null : 
        location.pathname === '*'?   null: 
       <NavBar />}
        <Switch> 
            <Route path={"/"} exact={true} component={Home} />
            <Route path={"/:id"} exact={true} component={UserHome} />
            <Route path={"/:id/newQuestion"} component={NewQuestion}/>
            <Route path={"/:id/leaderboard"} exact={true} component={LeaderBoard}/>
            <Redirect to="/notfound"/>
            {/* <Route path={"*"}  render={ ()=> (<Redirect to='/' />)} /> */}

        </Switch>

    </div>
    </Route>
    </Switch>
    
  );
}

export default App;
