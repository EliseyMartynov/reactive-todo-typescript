import React, { useState } from "react";
import styles from "../styles/Input.module.css";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todosSlice";

const Input = () => {
  const dispatch = useDispatch();

  const [txt, setTxt] = useState("");

  const modelInput = e => {
    setTxt(e.target.value);
  };

  const addTodoHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      text: txt
    };
    dispatch(addTodo(newTodo));

    setTxt("");
  };

  return (
    <div className={styles.box}>
      <form onSubmit={e => addTodoHandler(e)}>
        <input
          onChange={e => modelInput(e)}
          value={txt}
          className={styles.input}
          type="text"
        />
        <button onClick={(e) => addTodoHandler(e)} className={styles.btn}>Todo!</button>
      </form>
    </div>
  );
};

export default Input;
