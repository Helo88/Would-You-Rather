import { NavBar } from "../components/navBar"
export const NewQuestion =({user})=>{

return (

<div className="px-3"
          style={{
            backgroundImage: `url(${user.bgUrl})`,
            backgroundPosition: "right right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh"
          }}
        >

          <NavBar user={user} />
        </div>


)
}