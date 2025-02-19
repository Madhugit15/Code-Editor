import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { useState } from "react";
import './style.css'

const App = () => {
  const editorRef = useRef(null);
  // const [htmlContent, setHtmlContent] = useState("");

  // const handleEditorChange = () => {
  //   if (editorRef.current) {
  //     setHtmlContent(editorRef.current.getContent());
  //   }
  // };

  return (
    <div className="container">
      <div className="editor_head">
        <h3>ONLINE TEXT EDITOR</h3>
      </div>
      <div className="editor_content">
      <div className="editor_menu">
        <a href="/">WORD</a>
        <a href="/">HTML</a>
        <a href="/">PREVIEW</a>
      </div>
      <div style={{ width: "90%", margin: "auto", color: "black" }}>
        <Editor
          apiKey="t74lzn7ad6bsx83a6dlc0p7o5m3ujkcepr57yr7gsphxouww"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p></p>"
          init={{
            height: 550,
            menubar: true,

            plugins: [
              "a11ychecker",
              "advlist",
              "advcode",
              "advtable",
              "autolink",
              "checklist",
              "export",
              "lists",
              "link",
              "image",
              "charmap",

              "anchor",
              "searchreplace",
              "visualblocks",
              "powerpaste",
              "fullscreen",
              "formatpainter",
              "insertdatetime",
              "media",
              "table",
              "preview",
            ],
            toolbar:
              "undo redo | image | preview | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist  indent | removeformat | fontsizeselect | fontfamily",
            font_size_input_default_unit: "px",
            // font_family_formats: "Arial=arial,helvetica,sans-serif",
            font_size_formats:
              "8px 10px 12px 14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",

            placeholder: "Start typing here...",
            style_formats: [
              {
                title: "Font Weight",
                items: [
                  {
                    title: "Weight 200",
                    inline: "span",
                    styles: { "font-weight": "200" },
                  },
                  {
                    title: "Weight 300",
                    inline: "span",
                    styles: { "font-weight": "300" },
                  },
                  {
                    title: "Weight 400",
                    inline: "span",
                    styles: { "font-weight": "400" },
                  },
                  {
                    title: "Weight 500",
                    inline: "span",
                    styles: { "font-weight": "500" },
                  },
                  {
                    title: "Weight 700",
                    inline: "span",
                    styles: { "font-weight": "700" },
                  },
                ],
              },
            ],
            content_style: `
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
            body { font-family: 'Roboto', sans-serif; }
          `,
          }}
          // onEditorChange={handleEditorChange}
        />

        {/* <textarea
        value={htmlContent}
        style={{ width: "100%", height: "200px" }}
      /> */}
      </div>
      </div>
      
    </div>
  );
};

export default App;
