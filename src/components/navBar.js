import { Link, useHistory ,useLocation,useParams } from "react-router-dom";

export const NavBar =({user})=>{

//let { id } = useParams();
const history = useHistory();
function handleClick(){
history.goBack()
}
//console.log("hello user " ,JSON.stringify(user))
return(
<nav className="navbar fixed-top navbar-expand-sm p-0">

<div className="container-fluid ">

  <a className="navbar-brand  text-dark " href="#"
  onClick={handleClick}
  >
    <img src="/assets/images/logoSS.png" id="logo" alt="go back " title="logo"
        style={{width:"70px", height:"70px" ,borderRadius:"100%"}}
    />
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span><i className="fas fa-bars textTheme"></i></span>
  </button>


  <div className="collapse navbar-collapse p-0" id="collapsibleNavbar">
    <ul className="navbar-nav  w-100  d-flex justify-content-end align-items-start p-0">
      <li className="nav-item  mx-auto mx-md-0  text-center">
        <Link className="nav-link d-block text-dark" to={`/${user.id}`} >Dashboard</Link>
      </li>
      <li className="nav-item  mx-auto mx-md-0 text-center">
        <a className="nav-link d-block text-dark " href="#resumeSec">New Question</a>
      </li>
      <li className="nav-item mx-auto mx-md-0 text-center">
      <Link className="nav-link d-block text-dark" to="/leaderboard" >LeaderBoard</Link>
      </li>
    
      <li className="nav-item  d-flex px-2" >
        <img
          src={user.avatarURL}
          style={{width:"40px", height:"40px" ,borderRadius:"100%",marginRight:"5px"}}
        />
        <a className="nav-link d-block text-dark" href="#contactSec">{user.id}</a>
      </li>

      <li className="nav-item" >
        <Link to="/">
        <i className="bi bi-box-arrow-right d-block text-dark" id="logout"
        ></i>
        </Link>
      </li>
    </ul>
  </div>
</div>
</nav>


)

}