import React from "react";

function TodoList({ todoList }) {
  /**
   * forEach()코드
   * 배열을 활용하는 JS 필수 코드들
   * 배열.map() {retrun 값} : 배열개수를 그대로 유지하면서 새로운 배열만들기
   * 배열.filter() {return boolean}: 어떤 조건에 맞는 리스트만 추출할때
   * 배열.forEach() {새로운배열.push()} : 배열을 단순히 순서대로 연산처리할때
   */
  /**
   * react에서 forEach류의 함수를 사용하여 컴포넌트 list를 만들때
   * 반드시 가장 바깥쪽 tag에는 UNIQUE한 값으로 key를 설정해주어야한다
   */
  const viewList = todoList.map((todo) => {
    return (
      <tr key={todo.t_id}>
        <td>{todo.t_id}</td>
        <td>{todo.t_date}</td>
        <td>{todo.t_text}</td>
      </tr>
    );
  });

  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>날짜</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default TodoList;
