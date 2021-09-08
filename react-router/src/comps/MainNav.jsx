import React from "react";
import { NavLink } from "react-router-dom";
/**
 * Navigation menu 설정할때
 * Link 또는 NavLink 컴포넌트를 사용한다
 *
 * NavLink를 사용하면
 * NavLink에 의해 활성화된 페이지가 열리면
 * menu style 을 지정하여 어떤 메뉴가 활성화된건지를 표현할수있다
 * activeStyle={스타일변수}
 * activeClassName="클래스명"
 */

// NavLink
// Navigation menu를 구현할때 사용하는 컴포넌트
// 실제 rendering이 되면 a tag로 변환되는 컴포넌트
// react에서는 a tag를 사용하여 page를 전환하는 코드를 사용하지않는다
function MainNav() {
  // 컴포넌트 코드에 inline style 생성
  const activeNavStyle = {
    backgroundColor: "green",
  };

  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeNavStyle}>
          나의 소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/bbs" activeStyle={activeNavStyle}>
          자유 게시판
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
