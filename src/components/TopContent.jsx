import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { userContext } from "../App";

function TopContent() {
  const { editorRef } = useContext(userContext);

  const openSourceCode = (e) => {
    if (editorRef.current) {
      editorRef.current.execCommand("mceCodeEditor");
    }
  };
  const showPreview = (e) => {
    if (editorRef.current) {
      editorRef.current.execCommand("mcePreview");
    }
  };

  return (
    <div className="container">
      <h3>ONLINE TEXT EDITOR</h3>
      <div className="menus">
        <Link to="/">WORD</Link>

        <Link onClick={openSourceCode}>HTML</Link>

        <Link onClick={showPreview}>PREVIEW</Link>
      </div>
    </div>
  );
}

export default TopContent;
