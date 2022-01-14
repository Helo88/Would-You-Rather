import {Link } from "react-router-dom";
export const WrongRoute =()=>{
  console.log("hello err")
    return(
  
        <div className="p-3"
        style={{
        backgroundImage:'url("/assets/images/gang.png")',
        backgroundPosition:"left center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
        }} 
        >
     <Link className="text-dark text-decoration-none " to="/">
      <h1 className="mt-5 mx-auto text-center "> Click to Login</h1>
     </Link> 
    </div>
    )
}