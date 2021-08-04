import React, { useEffect, useRef, useState } from "react";
import S3 from "react-aws-s3";
import "quill/dist/quill.snow.css";

export const modules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image", "formula"],
      ["clean"],
    ],
  },
};

const QuillEditor = (props) => {
  const [session] = useSession();

  // 타이틀 설정
  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const Quill = typeof window == "object" ? require("quill") : () => false;
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (quillElement.current) {
      quillInstance.current = new Quill(quillElement.current, {
        theme: "snow",
        placeholder: "Please enter the contents.",
        modules: modules,
      });
    }
    const quill = quillInstance.current;
    const toolbar = quill.getModule("toolbar");
    toolbar.addHandler("image", onClickImageBtn);
  }, []);

  // s3 upload setting start
  const onClickImageBtn = () => {
    // s3 upload setting
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = function () {
      const file = input.files[0];
      const fileName = file.name;

      const config = {
        bucketName: "direct-upload-s3-bucket-testthing7",
        region: "ap-northeast-2",
        accessKeyId: "AKIAWBU33XUH2R3WQFX5",
        secretAccessKey: "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",
      };

      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(file, fileName).then((data) => {
        if (data.status === 204) {
          //커서 위치 받아오기 위함.
          const range = quillInstance.current.getSelection(true);
          // 1.현재 커서 위치에 2. 이미지를 3.src="" 로 나타냄.
          quillInstance.current.insertEmbed(
            range.index,
            "image",
            `${data.location}`
          );

          // 이미지 업로드 후 커서 이미지 한칸 옆으로 이동.
          quillInstance.current.setSelection(range.index + 1);
        } else {
          alert("error");
        }
      });
    };
  };
};
