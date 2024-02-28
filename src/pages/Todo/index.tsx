import { useState } from "react";

import "./styled.scss";

import TodoItem from "@/components/TodoItem";
import CreateTodo from "@/components/CreateTodo";

export default function Todo() {
  const [modal, setModal] = useState(false);

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

        <div className="todo-status">
          <div className="todo-status__item">
            <span className="todo-status__title">전체</span>
            <span className="todo-status__count">0</span>
          </div>

          <div className="todo-status__item">
            <span className="todo-status__title">진행중</span>
            <span className="todo-status__count todo-status__count--ing">
              0
            </span>
          </div>

          <div className="todo-status__item">
            <span className="todo-status__title">진행완료</span>
            <span className="todo-status__count todo-status__count--done">
              0
            </span>
          </div>
        </div>

        <ul className="todo-list">
          {Array.from({ length: 2 }).map((_, i) => {
            return (
              <li className="todo-list__item" key={i}>
                <TodoItem />
              </li>
            );
          })}
        </ul>

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
