import React from "react";
import "../css/JoinForm.css";

function JoinForm() {
  return (
    <div className="join_form">
      <input placeholder="아이디를입력하세요" />
      <input placeholder="비밀번호입력하세요" />
      <input placeholder="비밀번호다시입력하세요" />
      <input placeholder="E-mail입력하세요" />
      <button>회원가입</button>
    </div>
  );
}

export default JoinForm;
