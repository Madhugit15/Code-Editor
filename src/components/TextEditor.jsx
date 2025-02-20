import React, { useContext, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./style.css";
import { userContext } from "../App";

const TextEditor = () => {
  const { setHtmlContent } = useContext(userContext);
  const editorRef = useRef(null);

  const handleEditorChange = () => {
    if (editorRef.current) {
      setHtmlContent(editorRef.current.getContent());
    }
  };

  return (
    <div className="container">
      <div className="editor_head">
        <h3>ONLINE TEXT EDITOR</h3>
      </div>
      <div className="editor_content">
        <div className="editor_menu">
          <ul>
            <li>
              {" "}
              <a href="/">WORD</a>
            </li>
            <li>
              {" "}
              <Link to={"/HTML"}>HTML</Link>
            </li>
            <li>
              {" "}
              <a href="/">PREVIEW</a>
            </li>
          </ul>
        </div>
        <div style={{ width: "90%", margin: "auto", color: "black" }}>
          <Editor
            apiKey="t74lzn7ad6bsx83a6dlc0p7o5m3ujkcepr57yr7gsphxouww"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p></p>"
            init={{
              height: 600,
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
              selector: "textarea", // change this value according to your HTML

              line_height_formats:
                "0.2 0.4 0.6 0.8 1 1.2 1.4 1.6 2 2.2 2.4 2.6 3 3.2 3.4 3.6 4",
              toolbar:
                "undo redo | image | preview | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify|lineheight | bullist numlist checklist  indent | removeformat | fontsizeselect | fontfamily",
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
            onEditorChange={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
