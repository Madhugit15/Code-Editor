import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TextEditor from "./components/TextEditor";
import { createContext, useState, useEffect, useRef } from "react";

import TopContent from "./components/TopContent";
export const userContext = createContext();

function App() {
  const editorRef = useRef(null);
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
      value={{ htmlContent, setHtmlContent, handleEditorChange, editorRef }}
    >
      <BrowserRouter>
        <div className="App">
          <TopContent />
          <Routes>
            <Route path="/" element={<TextEditor />} />
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
