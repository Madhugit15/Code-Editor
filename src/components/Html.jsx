import { useContext } from "react";
import { userContext } from "../App";
function Html() {
  const { Content, isHtmlView, handleEditorChange } = useContext(userContext);

  return (
    <div style={{ width: "90%", height: "600px", margin: " 0 auto 50px auto" }}>
      <div title="HTML Code">
        {isHtmlView && (
          <textarea
            value={Content}
            onChange={(e) => handleEditorChange(e.target.value)}
            style={{ width: "100%", height: "500px", outline: "none" }}
          />
        )}
      </div>
    </div>
  );
}
export default Html;
