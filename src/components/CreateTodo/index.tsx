import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import * as T from "./types";
import "./styled.scss";

import Modal from "@/components/Modal";

const importanceList = [
  {
    label: "낮음",
    value: "low",
  },
  {
    label: "중간",
    value: "middle",
  },
  {
    label: "높음",
    value: "high",
  },
];

export default function CreateTodo(props: T.IPropsCreateTodo) {
  const { open, close } = props;

  const [value, setValue] = useState("");
  const [importance, setImportance] = useState("middle");

  const onSubmit = () => {
    if (value === "" && importance === "") return;

    postTodoList();
  };

  const postTodoList = async () => {
    try {
      const res = await axios.post(`//localhost:3000/todos`, {
        id: uuidv4(),
        content: value,
        completed: false,
      });

      if (res.status && res.status === 201) {
        alert("등록완료");
        close();
      }
    } catch (error) {
      console.error(`PostTodoList Error.. ${error}`);
    }
  };

  return (
    <Modal open={open} close={close}>
      <div className="create-todo">
        <div className="create-todo__row">
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="create-todo__input"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="create-todo__row">
          <strong className="create-todo__title">우선순위</strong>

          <div className="importance">
            {importanceList.map((item) => (
              <label key={item.value} className="importance__label">
                <input
                  type="radio"
                  className="blind"
                  name="importance"
                  value={item.value}
                  defaultChecked={item.value === importance}
                  onChange={(e) => setImportance(e.target.value)}
                />
                <i className="importance__icon"></i>
                <span className="importance__text">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="create-todo__ctrl">
          <button
            type="button"
            className="create-todo__ctrl-btn create-todo__ctrl-btn--cancel"
            onClick={close}
          >
            취소
          </button>
          <button
            type="button"
            className="create-todo__ctrl-btn create-todo__ctrl-btn--submit"
            onClick={onSubmit}
          >
            등록
          </button>
        </div>
      </div>
    </Modal>
  );
}
