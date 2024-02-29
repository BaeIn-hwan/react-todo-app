import TodoItem from "../TodoItem";
import * as T from "./types";

export default function TodoList(props: T.IPropsTodoList) {
  const { list, onCompleted, onDelete } = props;

  return (
    <>
      {list && list.length > 0 ? (
        <ul className="todo-list">
          {list.map((item) => {
            return (
              <li className="todo-list__item" key={item.id}>
                <TodoItem
                  item={item}
                  onCompleted={onCompleted}
                  onDelete={onDelete}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div>리스트 없다</div>
      )}
    </>
  );
}
