import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Todos.module.css";
import SingleTodo from "./SingleTodo";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
      <Droppable droppableId={"todos-droppable"}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.box}
          >
            {todos.map((item, i) => (
              (
                  <SingleTodo
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    index={i}
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                  />
                )
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  );
};

export default Todos;
