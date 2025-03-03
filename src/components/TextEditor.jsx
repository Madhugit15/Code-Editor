import React, { useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";

import "./style.css";
import { userContext } from "../App";

const TextEditor = () => {
  const { htmlContent, handleEditorChange, editorRef } =
    useContext(userContext);

  return (
    <div style={{ width: "90%", margin: " 0 auto 50px auto" }}>
      <Editor
        apiKey="t74lzn7ad6bsx83a6dlc0p7o5m3ujkcepr57yr7gsphxouww"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={htmlContent}
        init={{
          height: 500,
          menubar: true,

          plugins: [
            "code",
            "advlist",

            "autolink",

            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",

            "fullscreen",
            "nonbreaking",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "autosave",
            "wordcount",
          ],

          highlight_on_focus: false,
          color_default_background: true,

          line_height_formats:
            "0.2 0.4 0.6 0.8 1 1.2 1.4 1.6 2 2.2 2.4 2.6 3 3.2 3.4 3.6 4",
          toolbar:
            "undo redo | image |restoredraft| casechange blocks | bold italic blackcolor | alignleft aligncenter alignright alignjustify| lineheight | bullist numlist checklist removeindent indent | removeformat | fontsizeselect ",
          font_size_input_default_unit: "px",
          nonbreaking_wrap: true,
          font_size_formats:
            "8px 10px 12px 14px 16px 18px 20px 24px 26px 28px 30px 32px 36px",
          font_family_formats:
            "Roboto=Roboto, sans-serif; Open Sans=Open Sans, sans-serif; Lato=Lato, sans-serif; Montserrat=Montserrat, sans-serif; Oswald=Oswald, sans-serif; Source Sans Pro=Source Sans Pro, sans-serif; Slabo 27px=Slabo 27px, serif; Raleway=Raleway, sans-serif; PT Sans=PT Sans, sans-serif; Merriweather=Merriweather, serif; Noto Sans=Noto Sans, sans-serif; Ubuntu=Ubuntu, sans-serif; Playfair Display=Playfair Display, serif; Roboto Condensed=Roboto Condensed, sans-serif; Poppins=Poppins, sans-serif; Nunito=Nunito, sans-serif; Titillium Web=Titillium Web, sans-serif; Droid Sans=Droid Sans, sans-serif; Indie Flower=Indie Flower, cursive; Bitter=Bitter, serif; Arimo=Arimo, sans-serif; Cabin=Cabin, sans-serif; Fira Sans=Fira Sans, sans-serif; Inconsolata=Inconsolata, monospace; Josefin Sans=Josefin Sans, sans-serif; Libre Baskerville=Libre Baskerville, serif; Lora=Lora, serif; Muli=Muli, sans-serif; Quicksand=Quicksand, sans-serif; Rubik=Rubik, sans-serif; Work Sans=Work Sans, sans-serif; Zilla Slab=Zilla Slab, serif; Anton=Anton, sans-serif; Archivo Narrow=Archivo Narrow, sans-serif; Asap=Asap, sans-serif; Barlow=Barlow, sans-serif; Bebas Neue=Bebas Neue, sans-serif; Cairo=Cairo, sans-serif; Chivo=Chivo, sans-serif; Comfortaa=Comfortaa, sans-serif; Cormorant Garamond=Cormorant Garamond, serif; Crimson Text=Crimson Text, serif; Exo 2=Exo 2, sans-serif; Hind=Hind, sans-serif; Karla=Karla, sans-serif; Libre Franklin=Libre Franklin, sans-serif; Mukta=Mukta, sans-serif; Overpass=Overpass, sans-serif; PT Serif=PT Serif, serif; Rokkitt=Rokkitt, serif;",
          placeholder: "Start typing here...",

          setup: function (editor) {
            editor.on("init", function () {
              editor.getBody().style.lineHeight = "1";
              let Style = document.createElement("style");
              Style.type = "text/css";
              Style.textContent = "img {border-radius:6px;}";
              editor.getDoc().head.appendChild(Style);
            });
            editor.on("BeforeSetContent", function (e) {
              if (e.content) {
                e.content = e.content.replace(/&nbsp;/g, " ");
              }
            });
          },

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
          
         `,
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
