import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TextEditor from "./components/TextEditor";
import { createContext, useState, useEffect } from "react";
import Html from "./components/Html";
import TopContent from "./components/TopContent";
export const userContext = createContext();

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    const savedContent = localStorage.getItem("htmlContent");
    if (savedContent) {
      setHtmlContent(savedContent);
    }
  }, [setHtmlContent]);

  const handleEditorChange = (content) => {
    setHtmlContent(content);
    localStorage.setItem("htmlContent", content);
  };
  return (
    <userContext.Provider
      value={{ htmlContent, setHtmlContent, handleEditorChange }}
    >
      <BrowserRouter>
        <div className="App">
          <TopContent />
          <Routes>
            <Route path="/" element={<TextEditor />} />
            <Route path="/html" element={<Html />} />
            {/* <Route path="/HTML" element={< />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
