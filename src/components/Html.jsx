import React, { useContext } from "react";
import { userContext } from "../App";
// import { Link } from 'react-router-dom'

function Html() {
  const { htmlContent } = useContext(userContext);
  return (
    <div style={{marginBottom:"50px",overflowX:"-moz-hidden-unscrollable"}}>
      <textarea
        value={htmlContent}

        style={{
          width: "90%",
          height: "500px",
          margin:"0 66px",
          
          outline:"none"
          
        }}
      />
    </div>
  );
}

export default Html;
