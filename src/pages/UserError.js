import {Link } from "react-router-dom";
export const WrongRoute =()=>{
  localStorage.setItem('rememberMe', "");
  console.log("hello err")
    return(
  
        <div className="p-3"
        style={{
        backgroundColor:"rgb(170,215,228)",
        backgroundImage:'url("/assets/images/gang.png")',
        backgroundPosition:"-50px -100px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width:"100vw"
        }} 
        >
     <Link className="text-dark text-decoration-none " to="/login">
      <h1 className="mt-5 mx-auto text-center "> Click to Login</h1>
     </Link> 
    </div>
    )
}