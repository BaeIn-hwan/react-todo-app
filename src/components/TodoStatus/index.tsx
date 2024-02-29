import * as T from "../TodoItem/types";

export default function TodoStatus(props: { list: T.TItem[] }) {
  const { list } = props;

  return (
    <div className="todo-status">
      <div className="todo-status__item">
        <span className="todo-status__title">전체</span>
        <span className="todo-status__count">{list.length}</span>
      </div>

      <div className="todo-status__item">
        <span className="todo-status__title">진행중</span>
        <span className="todo-status__count todo-status__count--ing">
          {list.length - list.filter((item) => item.completed).length}
        </span>
      </div>

      <div className="todo-status__item">
        <span className="todo-status__title">진행완료</span>
        <span className="todo-status__count todo-status__count--completed">
          {list.filter((item) => item.completed).length}
        </span>
      </div>
    </div>
  );
}
