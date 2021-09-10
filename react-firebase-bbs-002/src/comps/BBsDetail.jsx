import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { firestore } from "../cofig/FirebaseConfig";

function BBsDetail() {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;

  const [bbs, setBBs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });

  const findByidFetch = useCallback(async () => {
    if (docId) {
      const result = firestore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBBs(result.data());
      }
    }
  }, []);
  useEffect(findByidFetch, [findByidFetch]);

  const onDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      firestore
        .collection("bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          router.push(`/`);
        });
    }
  };

  return (
    <div className="bbs_detail">
      <h1>Detail</h1>
      <div>
        <label htmlFor="">작성일자</label>
        <span>{bbs.b_date}</span>
      </div>
      <div>
        <label htmlFor="">작성시각</label>
        <span>{bbs.b_time}</span>
      </div>
      <div>
        <label htmlFor="">글쓴이</label>
        <span>{bbs.b_writer}</span>
      </div>
      <div>
        <label htmlFor="">제목</label>
        <span>{bbs.b_subject}</span>
      </div>
      <div>
        <label htmlFor="">내용</label>
        <span>{bbs.b_content}</span>
      </div>
      <div class="bbs_btn_box">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          처음으로
        </button>
        <button
          onClick={() => {
            router.push(`/write/${docId}`);
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default BBsDetail;
