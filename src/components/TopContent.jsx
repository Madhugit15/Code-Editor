import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { userContext } from "../App";

function TopContent() {
  const { editorRef, setIsHtmlView, setIsWord } = useContext(userContext);

  function showHtml() {
    setIsHtmlView(true);
    setIsWord(false);
  }
  function showWord() {
    setIsHtmlView(false);
    setIsWord(true);
  }

  const showPreview = (e) => {
    editorRef.current.execCommand("mcePreview");
  };

  return (
    <div className="container">
      <h3>ONLINE TEXT EDITOR</h3>
      <div className="menu_lists">
        <div className="menus">
          <Link to="/" onClick={showWord}>
            WORD
          </Link>

          <Link to="/html" onClick={showHtml}>
            HTML
          </Link>

          <Link onClick={showPreview}>PREVIEW</Link>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
