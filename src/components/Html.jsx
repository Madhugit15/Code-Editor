import React, { useRef } from "react";
// import { userContext } from "../App";
import { Editor } from "@tinymce/tinymce-react";

import "./style.css";

function Html() {
  const editorRef = useRef(null);
  // const { htmlContent } = useContext(userContext);
  const openSourceCode = () => {
    if (editorRef.current) {
      editorRef.current.execCommand("mceCodeEditor");
    }
  };
  return (
    <div
      style={{ marginBottom: "50px", overflowX: "-moz-hidden-unscrollable" }}
    >
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: "code",
          toolbar: "undo redo | code",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={openSourceCode}>HTML</button>
    </div>
  );
}

export default Html;
