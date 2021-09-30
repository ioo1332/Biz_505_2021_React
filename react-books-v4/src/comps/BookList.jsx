import BookItem from "./BookItem";
const viewStyle = {
  width: "90%",
  margin: "30px auto",
  border: "3px solid #ddd",
  padding: "0.8rem",
};
// 객체배열을 선언하여 List의 제목 배열 만들기
const list_title_names = [
  { id: 0, t_name: "ID" },
  { id: 1, t_name: "도서명" },
  { id: 2, t_name: "장르" },
  { id: 3, t_name: "출판사" },
  { id: 4, t_name: "저자" },
  { id: 5, t_name: "가격" },
];

// 제목 배열을 사용하여 table의 title 생성하기
const list_title_view = list_title_names.map((title) => {
  return <th key={title.id}>{title.t_name}</th>;
});

function BookList() {
  return (
    <table className="book_list" style={viewStyle}>
      <thead>
        <tr>{list_title_view}</tr>
      </thead>
      <tbody>
        <BookItem />
      </tbody>
    </table>
  );
}

export default BookList;
