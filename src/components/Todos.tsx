import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Todos.module.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
import { RootState } from "../store";

export type SingleTodoType = {
  id: string;
  text?: string;
  completed: boolean;
};

const Todos = () => {
  const todosFromRedux = (state: RootState) => state.todos;

  const todos = useSelector(todosFromRedux);

  return (
    <Droppable droppableId={"todos-droppable"}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={styles.box}
        >
          {todos.map((item: SingleTodoType, i: number) => (
            <SingleTodo
              index={i}
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Todos;
