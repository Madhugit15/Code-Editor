import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TextEditor from "./components/TextEditor";
import { createContext, useState } from "react";
import Html from "./components/Html";
import TopContent from "./components/TopContent";
export const userContext = createContext();

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  return (
    <userContext.Provider value={{ htmlContent, setHtmlContent }}>
      <BrowserRouter>
        <div className="App">
          <TopContent/>
          <Routes>
            <Route path="/" element={<TextEditor />} />
            <Route path="/HTML" element={<Html />} />
            <Route path="/HTML" element={<Html />} />
          </Routes>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
