import { useContext } from "react";
import { userContext } from "../App";

function Preview() {
  const { Content } = useContext(userContext);
  console.log(Content.InnerText);
  return (
    <div
      className="preview"
      style={{
        width: "88%",
        height: "500px",
        margin: " 0 auto 50px auto",
        backgroundColor: "white",
        padding:"15px",
        fontFamily:"Roboto, sans-serif",
        overflow:"scroll"
        // lineHeight:"30px"
        
      }}
      dangerouslySetInnerHTML={{ __html: Content }}
    ></div>
  );
}

export default Preview;
