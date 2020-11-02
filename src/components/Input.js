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

  const validationHandler = () => {
    const failStyle = `${styles.inputFailed}`;
    const todoInput = document.querySelector("#todo-input");
    console.log('test')
    {/*https://www.regular-expressions.info/shorthand.html find whitespace expression here*/}
    if (txt.match(/^\s+$/ig) !== null || !txt) {
      todoInput.classList.add(failStyle);
    } else {
      if (todoInput.classList.contains(failStyle)) {
        todoInput.classList.remove(failStyle);
      }
    }
  };

  const addTodoHandler = e => {
    e.preventDefault();
    if (txt.match(/^\s+$/ig) === null || txt) {
      const newTodo = {
        id: uuid(),
        text: txt
      };
      dispatch(addTodo(newTodo));
      setTxt("");
    }
  };

  return (
    <div className={styles.box}>
      <form onSubmit={e => addTodoHandler(e)}>
        <input
          id="todo-input"
          onKeyUp={() => validationHandler()}
          onChange={e => modelInput(e)}
          value={txt}
          className={styles.input}
          type="text"
        />
        <button onClick={e => addTodoHandler(e)} className={styles.btn}>
          Todo!
        </button>
      </form>
    </div>
  );
};

export default Input;
