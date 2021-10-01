import React, { createContext, useContext, useState } from "react";
import { useRef } from "react";
/**
 * react Context API 기능을 활용하여
 * state를 관리하는 도구
 *
 * 다중구조의 컴포넌트가 겹쳐있는 경우 state를 전파하는것이
 * 매우 불편한 코드로 작성될수있다
 *
 * 이럴때 Context API를 활용하여 state와 공용으로 사용할 여러가지 함수를
 * store에 보관하고 필요한곳에서만 useContext를 사용하여 쉽게 getter 할수있도록
 * 도와주는 컴포넌트
 *
 * context를 생성하기
 * 생성된 context에 state등을 보관하고
 * useContext() Hook을 커스터마이징하여 손쉽게 사용할수 있도록 하는
 *
 * context를 사용할 컴포넌트들을 합성패턴을 이용하여 관리 할수있도록 한다
 */

// context 생성
const AppContext = createContext();

// 컨텍스트의 store에 보관된 정보들 추출하기 위한 Hook함수 선언
export const useTodoContext = () => useContext(AppContext);

// Provider를 합성패턴으로 선언하여 필요한곳에서 끌어올려 사용할수있도록 한다
function AppContextProvider({ children }) {
  // Todo 정보 1개를 보관할 state
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "복습",
    t_comp: false,
  });
  const [todoList, setTodoList] = useState([todo]);
  // refernece 변수 선언
  const nextId = useRef(0);
  const inputId = useRef();

  const onChange = (e) => {
    const t_text = e.target.value;
    // ES6 이후에는 객체에 값을 담을때 객체의 키이름과 같은 변수에
    // 담긴값을 담을때 키이름을 한번만 사용해도된다
    // t_text:t_text  = t_text
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };
  // list에 추가하기
  const todoInsert = () => {
    if (todo.t_text === "") {
      window.alert("할일입력해주세요");
      inputId.current.focus();
      return;
    }
    setTodoList([...todoList, todo]);
    nextId.current++;
    todoClear();
  };
  // 입력창 clear
  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };
  // 입력된 todo를 todoList에 추가하기
  const onClick = () => todoInsert({});
  // 입력박스에서 enter키가 눌러지면 발생하는
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      todoInsert();
    } else if (e.code === "Escape") {
      todoClear();
    }
  };
  const onDeleteClick = (e) => {
    if (window.confirm("삭제할까요")) {
      // data-todo-id 라고 저장하면 앞에 data-는 dataset으로 변경
      // todo-id 는 lower calmel case로 변경되어 todoID변수에서 getter한다
      const t_id = Number(e.target.dataset.todoID);
      // 배열 요소중에서 t_id 일치하는 요소를 삭제
      // 원래 배열요소를 filtering하는데 t_id값이 dataset의 todoID와
      // 일치하지 않는 것만 새로운 배열로 만들어라
      const _todoList = todoList.filter((todo) => todo.t_id !== t_id);
      setTodoList(_todoList);
      //alert("삭제됨");
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoID);
    // 배열요소중에 조건에 맞는값이 있으면 그 값이 몇번째요소인지
    // index를 retrun
    const index = todoList.findIndex((todo) => todo.t_id === t_id);

    // 해당요소만 따로 추출하여 selectTodo에 담기
    const selectTodo = todoList[index];
    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };
    setTodoList(_todoList);
  };

  const propsStore = {
    todo,
    inputId,
    todoList,
    onChange,
    onClick,
    onKeyPress,
    onDeleteClick,
    onCompClick,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
