import React, { useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";

import "./style.css";
import { userContext } from "../App";

const TextEditor = () => {
  const { htmlContent, handleEditorChange, editorRef } =
    useContext(userContext);

  return (
    <div style={{ width: "90%", margin: " 0 auto 50px auto", outline: "none" }}>
      <Editor
        apiKey="t74lzn7ad6bsx83a6dlc0p7o5m3ujkcepr57yr7gsphxouww"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={htmlContent}
        init={{
          height: 500,
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
            "autosave",
            "wordcount",
            "autocorrect",
          ],
          autocorrect_autocorrect: true,
          highlight_on_focus:false,
          advcode_inline: true,
          advcode_prettify_getcontent: true,
          preview_styles: true,
          line_height_formats:
            "0.2 0.4 0.6 0.8 1 1.2 1.4 1.6 2 2.2 2.4 2.6 3 3.2 3.4 3.6 4",
          toolbar:
            "undo redo | image |restoredraft| casechange blocks | bold italic blackcolor | alignleft aligncenter alignright alignjustify| lineheight | bullist numlist checklist  indent | removeformat | fontsizeselect ",
          font_size_input_default_unit: "px",

          font_size_formats:
            "8px 10px 12px 14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",

          placeholder: "Start typing here...",
          autosave_restore_when_empty: true,
          autosave_retention: "30m",
          autosave_interval: "3s",
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
            body { font-family: 'Roboto', sans-serif; },
          
          img{
            border-radius:10px;
        }`,
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
