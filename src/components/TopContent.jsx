import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { userContext } from "../App";

function TopContent() {
  const navigate = useNavigate();
  const { editorRef } = useContext(userContext);

  const openSourceCode = () => {
    if (editorRef.current) {
      const Navigate = editorRef.current.execCommand("mceCodeEditor");
      navigate(Navigate);
    }
  };

  return (
    <div className="container">
      <h3>ONLINE TEXT EDITOR</h3>
      <div className="menus">
        <Link to={"/"}>WORD</Link>

        <Link onClick={openSourceCode}>HTML</Link>

        <Link to={"/preview"}>PREVIEW</Link>
      </div>
    </div>
  );
}

export default TopContent;
