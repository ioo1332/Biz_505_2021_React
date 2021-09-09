import React from "react";
import { useState } from "react";
import { useCallback } from "react";

const headArray = ["작성일자", "작성시각", "작성자", "제목"];
const bbsSampleData = {
  b_id: "0001",
  b_date: "2021-09-09",
  b_time: "10:50:00",
  b_writer: "홍길동",
  b_subject: "제목",
};
const BBsList = () => {
  const bbs_header = useCallback(() => {
    return headArray.map((text) => {
      return <th>{text}</th>;
    });
  }, []);
  const [] = useState([]);

  return (
    <table className="bbs_list">
      <thead>
        <tr>{bbs_header()}</tr>
      </thead>
      <tbody>
        <tr>
          <td>2021-09-09</td>
          <td>10:50:00</td>
          <td>홍길동</td>
          <td>제목</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BBsList;
