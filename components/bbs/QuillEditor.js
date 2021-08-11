import React, { useEffect, useCallback, useRef, useState } from "react";
import S3 from "react-aws-s3";
import "quill/dist/quill.snow.css";
import { useSession } from "next-auth/client";
import axios from "axios";
import { useRouter } from "next/router";
import useSwrFetch from "../../hook/useSwrFetch";
import useSwrCrud from "../../hook/useSwrCrud";

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
  // QuillSetting
  const Quill = typeof window == "object" ? require("quill") : router.back();
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (quillElement.current && Quill) {
      quillInstance.current = new Quill(quillElement.current, {
        theme: "snow",
        placeholder: "Please enter the contents.",
        modules: modules,
      });
    }
    const quill = quillInstance.current;
    const toolbar = quill.getModule("toolbar");
    toolbar.addHandler("image", onClickImageBtn);

    //수정할 내용
    if (category === "글수정") {
      const modifyData = async () => {
        const [{ title, username, cont }] = await axios(
          `/api/post/postDetail?_id=${p_id}`
        ).then((response) => {
          return response.data;
        });
        setTitle(title);
        setUsername(username);
        setModCont(cont);
        quillInstance.current.root.innerHTML = cont;
        return;
      };
      modifyData();
    }

    if (category === "상담사연") {
      quillInstance.current.root.innerHTML = `<p>재회상담 진단 양식서입니다. 아래의 내용을 A4 용지 2장 정도로 디테일하게 적어주시면,</p><p>재회상담을 위한 진단 및 방향성 설계를 해드립니다. 작성 후 오른쪽 하단의 &nbsp;카카오톡으로 알려주시기 바랍니다.</p><p><br></p><p>※ 재회 및 연애에 대한 무료 강의 및 칼럼을 제공하는 중입니다. 관심있는 분들은</p><p>카카오 플러스&nbsp;http://pf.kakao.com/_MbtwC&nbsp;친구등록을 하시면 다양한 소식을 얻으실 수 있습니다.</p><p><br></p><p>재회진단 양식에 맞게 올려주시면, 1차 무료진단을 해드리고 있습니다.</p><p>무료진단은 진단을 위한 것이며, 해결을 위해서는 정식 유료 컨설팅을 받으셔야합니다.</p><p>이별이라는 중요하고 힘든 순간에, 혼자만의 생각으로 제대로된 상담에 대한 투자를 주저해서,&nbsp;</p><p>분명 1차 무료진단때 재회가능성이 비교적 높았으나, 혼자만의 잘못된 전략으로 시도를 해버리는 바람에&nbsp;</p><p>최악의 상황이 된 후, 다시 상담을 받고 싶다고 하시는 분들이 많이 계시는데,&nbsp;</p><p>골든타임을 놓칠 시, 그 어떤 컨설턴트가 도움을 드려도 재회가 불가능한 상황이 되버리는 경우가 많습니다.</p><p>지나치게 공짜마인드로 어떻게든 혼자서 해결해보려고 하시지 마시고,&nbsp;</p><p>반드시 재회가능성이 높게 나오는 순간 정식 유료 컨설팅을 활용하여 어려움을 극복하시길 바랍니다.</p><p><br></p><p><br></p><p>무료진단에 대해서 정확하게 알기 : https://seolleim.kr/notice/?idx=1628424&amp;bmode=view&nbsp;</p><p>재회컨설팅에 대해서 정확하게 알기 :&nbsp;</p><p>https://seolleim.kr/notice/?idx=1628610&amp;bmode=view</p><p>https://seolleim.kr/notice/?idx=2007195&amp;bmode=view</p><p><a href="https://seolleim.kr/shop_view/?idx=2">https://seolleim.kr/shop_view/?idx=2</a></p><p><br></p><p><br></p><p style="text-align: left;"><img className="fr-dib fr-fil" src="https://cdn.imweb.me/upload/S201803195aaf2502c5098/5daac77d080f6.jpg"></p><p>자세한 재회상담을 위해</p><p>최대한 디테일하게 적어주세요 (A4 용지 한장!)</p><p><br></p><p>☆ 필수입력양식입니다.&nbsp;</p><p><br></p><p>1. 이름 :</p><p><br></p><p>2. 나이/성별/직업/연봉/거주지역 / 가족관계 (몇남몇녀, 가족간의 관계) :</p><p><br></p><p>3. 의뢰인 연락처 :</p><p><br></p><p>4. 의뢰인 연애경험(교제횟수, 평균 교제기간): &nbsp;</p><p><br></p><p>5. 남들이 보는 의뢰인의 성격, 외모수준&nbsp;:</p><p><br></p><p>6. 이전 연애에서의 안좋은 경험 :</p><p><br></p><p>7. 상대방 성함/나이/성별/직업/연봉 / 거주지역 / 가족관계 (몇남몇녀, 가족간의 관계) :</p><p><br></p><p>8. 상대방 SNS 주소, 연결상태(차단여부):&nbsp;</p><p><br></p><p>9. 상대방의 성격 및 특성 / 외모수준 :</p><p><br></p><p>10. 설레임연애종합회사를 알게 된 경로, 검색 키워드명 :</p><p><br></p><p>사귐</p><p><br></p><p>① &nbsp;상대 이성이 내담자 분의 어떤 점에 끌렸는지</p><p>② 상대 이성이 연애를 하는데 있어서 중요하게 생각한 부분들 - 연애의 가치관 - &nbsp;</p><p><br></p><p>③ 상대 이성이 연애에 있어서 내담자분에게 평소에 어떤 부분에 있어서 변화 혹은 맞춰달라고 했는지?</p><p><br></p><p>④ 내담자 분이 상대 이성의 어떤 점에 끌렸는지</p><p><br></p><p>⑤ 내담자 분이 연애를 하는데 있어서 중요하게 생각한 부분들 - 연애의 가치관 - &nbsp;</p><p><br></p><p>⑥ 내담자 분이 연애에 있어서 상대 이성에게 평소에 어떤 부분에 있어서 변화 혹은 맞춰달라고 했는지?</p><p><br></p><p><br></p><p>&nbsp;</p><p>15. 헤어짐까지의 일련의 과정&nbsp;</p><p>(연인간의 트러블 - 싸움 등 - &nbsp;, 처음 헤어진과정, 극복과정, 마지막 헤어진과정 &nbsp;:</p><p><br></p><p>16. 고민사연등 :</p><p><br></p><p>17. 무료진단을 통해 성공가능성에 대해서 알고 싶으신가요? 정식 유료 컨설팅을 통해 재회의 해결책을 얻고 싶으신가요?</p><p><br></p><p>18. 타 재회회사에서의 재회상담 경험이 있으신가요? 경험이 있으시다면, 어떤 회사였는지 알려주세요.</p><p>추후 상담을 드릴때, 참고사항이 되는 부분입니다.&nbsp;</p><p><br></p><p>19. 정식컨설팅을 신청하신다면, 어떤 점에서 집중적으로 도움을 받고 싶으신가요?</p><p><br></p><p>20. 담당 상담 선생님에게 특별히 당부하고 싶은 이야기가 있으시면 말씀해주시기 바랍니다.</p><p><br></p><p>꼼꼼하게 작성해주셔서 감사합니다.</p><p>최상의 재회 컨설팅을 제공해드리겠습니다.</p><p><br></p><p>※ 재회 및 연애에 대한 무료 강의 및 칼럼을 제공하는 중입니다. 관심있는 분들은</p><p>카카오 플러스&nbsp;http://pf.kakao.com/_MbtwC&nbsp;친구등록을 하시면 다양한 소식을 얻으실 수 있습니다.</p><p><br></p><p><br></p><p>재회는 수석컨설턴트 이혜리 선생님이 전담관리하고 있습니다.</p><p style="text-align: left;"><img className="fr-dib fr-fil" src="https://cdn.imweb.me/upload/S201803195aaf2502c5098/e0e139033660c.png"></p>`;
    }
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
        bucketName: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
        region: process.env.NEXT_PUBLIC_S3_REGION,
        accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
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

  // 글 등록시, 보내야할 정보
  // 유저정보
  const [session, loading] = useSession();
  const userid = session?.user.uid;

  //게시판 카테고리정보
  const { p_id, category } = props;

  // 타이틀 설정
  const [title, setTitle] = useState(
    category === "상담사연" ? "[심리상담] 상담 신청합니다" : ""
  );
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // 작성자
  const [username, setUsername] = useState("");
  const handleName = (e) => {
    setUsername(e.target.value);
  };

  // 작성내용
  const [modCont, setModCont] = useState("");

  //useRouter
  const router = useRouter();

  //useSwr
  const { swrdata, mutate } = useSwrFetch(
    `/api/post/post?category=${category}`
  );

  const CreateItem = () => {
    // quill 에디터에서 작성한 값을 cont에 저장
    const cont = quillInstance.current.root.innerHTML;

    //작성자, 제목을 입력해야함.
    if (
      title === "" ||
      username === "" ||
      cont === "" ||
      cont === '<p style="text-align: left;"><br></p>'
    ) {
      alert("글등록시 작성자, 제목, 내용을 입력하셔야합니다.");
      return;
    }
    const variables = {
      userid,
      username,
      category,
      title,
      cont,
    };

    //post 요청
    // useSwrCrud(
    //   "post",
    //   `/api/post/post?category=${category}`,
    //   variables,
    //   swrdata,
    //   mutate
    // );
    axios.post("/api/post/post", variables).then(function (resp) {
      mutate([...swrdata, resp], true);
    });
    router.back();
  };

  const ModifyItem = (p_id) => {
    // quill 에디터에서 작성한 값을 cont에 저장
    const cont = quillInstance.current.root.innerHTML;

    //작성자, 제목을 입력해야함.
    if (
      title === "" ||
      username === "" ||
      cont === "" ||
      cont === '<p style="text-align: left;"><br></p>'
    ) {
      alert("글등록시 작성자, 제목, 내용을 입력하셔야합니다.");
      return;
    }

    axios
      .put("/api/post/post", { p_id, username, title, cont })
      .then(function (resp) {
        mutate([...swrdata], true);
      });

    router.back();
    router.back();
  };

  const goList = () => {
    router.back();
  };

  return (
    <>
      <div className="wrap_write_head">
        {category === "글수정" ? (
          <span className="tit">글수정</span>
        ) : (
          <span className="tit">{category} 작성</span>
        )}
        <span className="box_btn">
          <span className="btn btn_cancel" onClick={goList}>
            취소
          </span>
          {category === "글수정" ? (
            <span className="btn btn_save" onClick={() => ModifyItem(p_id)}>
              수정
            </span>
          ) : (
            <span className="btn btn_save" onClick={CreateItem}>
              작성
            </span>
          )}
        </span>
      </div>
      <div className="wrap_quill_editor">
        <ul className="write_creat_info">
          <li>
            <input
              type="text"
              className="quill_tit"
              onChange={handleName}
              value={username}
              placeholder="작성자 입력"
            />
          </li>
          <li>
            <input
              type="text"
              className="quill_tit"
              onChange={handleTitle}
              value={title}
              placeholder="제목 입력"
            />
          </li>
        </ul>
        <div ref={quillElement}></div>
      </div>
    </>
  );
};

export default QuillEditor;
