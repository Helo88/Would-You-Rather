import { useState } from "react";
export const Qoption = ({data}) => {
    const [opt, setOpt] = useState("");



return (
<div className="form-check">
<input 
type="radio"
 className="form-check-input"
id={data.text} 
name={data.text}
value={data.text}
onChange={(e)=>
{console.log(e.target.value)
setOpt(e.target.value)
}}
checked={opt===data.text}

/>{data.text}
<label className="form-check-label" htmlFor={data.text}></label>
</div>



)}