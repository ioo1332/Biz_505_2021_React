import React from "react";
import "../css/JoinForm.css";
import { useState } from "react";

function JoinForm() {
  const [join, setJoin] = useState({
    userid: "",
    password: "",
    password_re: "",
    email: "",
  });
  const userid = useRef();
  const password = useRef();
  const password_re = useRef();
  const email = useRef();

  const onChange = () => {
    //setJoin({ ...join, [name]:value, e.target.value });
  };
  const onJoin = async () => {
    if (join.userid === "") {
      alert("아이디 입력 하세요");
      return;
    } else if (join.password === "") {
      alert("비밀번호 입력 하세요");
      return;
    } else if (join.password_re !== join.password) {
      alert("비밀번호 다시 확인 하세요");
      return;
    } else if (join.email === "") {
      alert("이메일 입력 하세요");
      return;
    }
  };
  return (
    <div className="join_form">
      <input placeholder="아이디를입력하세요" onChange={onChange} />
      <input placeholder="비밀번호입력하세요" onChange={onChange} />
      <input placeholder="비밀번호다시입력하세요" onChange={onChange} />
      <input placeholder="E-mail입력하세요" onChange={onChange} />
      <button onClick={onJoin}>회원가입</button>
    </div>
  );
}

export default JoinForm;
