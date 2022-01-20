import { useState } from "react";

export const Option = ({ getOption,placeholder }) => {
  const [opt, setOpt] = useState("");

  function handleChange(e){
   setOpt(e.target.value)
   getOption(e.target.value)
  }

  return <>
    <div className="mb-3 p-0 mt-0">
    <input type="text" 
    value={opt}
    onChange={(e)=>{handleChange(e)}}
    className="form-control "  placeholder={placeholder} />
     </div>
  </>;
};
