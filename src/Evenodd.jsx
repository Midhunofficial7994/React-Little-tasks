import React, { useState } from "react";

const Evenodd = () => {
  const [item, newItem] = useState();
  const [num,setnUM] = useState();
 
  
  
  
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: 200, height: 200, backgroundColor: "red" }}>{num%2==0 ? num : ""}</div>
      <div style={{ width: 200, height: 200, backgroundColor: "yellow" }}>
        <input type="text"   onChange={(e)=>newItem(e.target.value)}/>
        <button onClick={()=>setnUM (item)}>submit</button>
      </div>
      <div style={{ width: 200, height: 200, backgroundColor: "blue" }}> {num%2!==0 ? num : ""}</div>
    </div>
  );
};

export default Evenodd;
