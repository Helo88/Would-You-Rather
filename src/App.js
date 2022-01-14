import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  {Home}  from "./pages/home";
import './App.css';
import { UserHome } from "./pages/userHome";
import { WrongRoute } from "./pages/UserError";
import { LeaderBoard } from "./pages/LeaderBoard";

function App() {
  return (
    <div className="" 
    style={{}}>
      
     <Router>
          {/* <NavBar/> */}
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/:id"} exact component={UserHome} />
            <Route path={"/leaderboard"} exact component={Home} />


            <Route path={"*"} exact component={WrongRoute} />
           
          </Switch>
          {/* <Footer /> */}
        </Router>
    </div>
  );
}

export default App;
