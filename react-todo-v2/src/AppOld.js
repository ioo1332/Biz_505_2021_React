import React from "react";
import TodoList from "./comps/TodoList";
import TodoInput from "./comps/TodoInput";
function AppOld() {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div>오늘할일</div>
        <section>
          <TodoInput />
        </section>
        <section>
          <TodoList />
        </section>
      </main>
    </AppContextProvider>
  );
}

export default AppOld;
