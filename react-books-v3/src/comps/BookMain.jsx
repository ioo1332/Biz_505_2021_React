import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";

import BookContext from "../contetxt/BookContext";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을때 선택적으로 화면을 보여주기
 *
 */
function BookMain() {
  const [book, setBook] = useState({
    b_name: "자바야놀자",
    b_genre: "IT개발서",
  });
  const providerData = { book, setBook };
  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 홈 화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
        </Route>
        <Route path="/list" exact>
          여기는 리스트 화면
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
