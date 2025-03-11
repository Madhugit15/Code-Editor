import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TextEditor from "./components/TextEditor";
import { createContext, useState, useEffect, useRef } from "react";
import TopContent from "./components/TopContent";
import Html from "./components/Html";
import Preview from "./components/Preview";

export const userContext = createContext();

function App() {
  const editorRef = useRef(null);
  const [Content, setContent] = useState("");
  const [isHtmlView, setIsHtmlView] = useState(false);
  const [isWord, setIsWord] = useState(true);

  useEffect(() => {
    const savedContent = localStorage.getItem("Content");
    if (savedContent) {
      setContent(savedContent);
    }
  }, [setContent]);

  const handleEditorChange = (content) => {
    setContent(content);

    localStorage.setItem("Content", content);
  };

  return (
    <userContext.Provider
      value={{
        isHtmlView,
        setIsHtmlView,
        handleEditorChange,
        editorRef,
        Content,
        setContent,
        isWord,
        setIsWord,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <TopContent />
          <Routes>
            <Route path="/" element={<TextEditor />} />
            <Route path="/html" element={<Html />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
