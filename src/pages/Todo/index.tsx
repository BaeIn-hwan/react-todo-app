import { useEffect, useState } from "react";
import axios from "axios";

import "./styled.scss";

import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";
import TodoStatus from "@/components/TodoStatus";
import { TItem } from "@/components/TodoItem/types";

export default function Todo() {
  const [todoList, setTodoList] = useState<TItem[] | []>([]);
  const [modal, setModal] = useState(false);

  const getTodoList = async () => {
    try {
      const response = await axios.get(`//localhost:3000/todos`);

      console.log(response);
      setTodoList(response.data.reverse());
    } catch (error) {
      console.error(`GetTodoList Error.. ${error}`);
    }
  };

  const onCompleted = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    putTodoList(id);
  };

  const putTodoList = async (id: string) => {
    try {
      const response = await axios.patch(`//localhost:3000/todos/${id}`, {
        completed: !todoList.find((item) => item.id === id)?.completed,
      });

      if (response && response.status && response.status === 200) getTodoList();
    } catch (error) {
      console.error(`DeleteTodoList Error.. ${error}`);
    }
  };

  const onDelete = (id: string) => {
    const isDelete = confirm("삭제하시겠습니까?");

    if (isDelete) {
      deleteTodoList(id);
    }
  };

  const deleteTodoList = async (id: string) => {
    try {
      const response = await axios.delete(`//localhost:3000/todos/${id}`);

      if (response && response.status && response.status === 200) getTodoList();
    } catch (error) {
      console.error(`DeleteTodoList Error.. ${error}`);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <main className="todo">
        <h1 className="todo__title">TODOLIST</h1>

        <div className="todo-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="todo-search__icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="todo-search__input"
          />
        </div>

        <TodoStatus list={todoList} />

        <TodoList
          list={todoList}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />

        <div className="todo-floating">
          <button
            type="button"
            className="todo-floating__btn todo-floating__btn--add"
            onClick={() => {
              setModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </main>

      <CreateTodo open={modal} close={() => setModal(false)} />
    </>
  );
}
