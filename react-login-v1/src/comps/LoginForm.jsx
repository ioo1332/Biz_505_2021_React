import React from "react";
import "../css/LoginForm.css";
import { useState } from "react";

function LoginForm() {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const onChage = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });
    // 서버로부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일경우 res 자체가 undefinded 또는 null값이 된다
    // if(res){}연산을 하면 res가 정상인지 확인 할수있다
    // res가 정상이 아닐경우 res.ok에서 오류가 발생한다
    // ES6+버전에서 safe null 검사를 수행하는 코드가있다
    // res가 정상(null,undefined가 아니면 .ok 속성을 검사하라)
    // null로 인한 오류를 방지하는 코드
    if (res?.ok) {
      const user = await res.json();
      console.log("userid", account.userid);
      //const user = users.find((item) => {
      //return item.userid === account.userid;
      //});
      console.log("user", user);

      if (!user) {
        alert("아이디가 없음");
        return;
      }
      if (user.password !== account.password) {
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");
    }
  };

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        onChange={onChage}
      />
      <input
        name="password"
        type="password"
        placeholder="비빌번호를 입력하세요"
        onChange={onChage}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
