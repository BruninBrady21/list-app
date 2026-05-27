import React, { useEffect } from "react";
import styled from "styled-components";

interface TaskListProps {
  tasks: { id: number; name: string; completed: boolean }[];
  onRemoveTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListItem = styled.li<{ completed: boolean }>`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${({completed}) => (completed ? "line-through" : "none")};
`;

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px; 
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c82333;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #c10e49;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid #c10e49;
  }
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask, onToggleTask }) => {

  useEffect(() => {
    console.log("TaskList component rendered", tasks);
  }, [tasks]);

  return (
    <List>
        {tasks.map((task) => (
          <ListItem key={task.id} completed={task.completed}>
            <TaskInfo>
              <Checkbox
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
              />
              <span>{task.name}</span>
            </TaskInfo>
            <Button onClick={() => onRemoveTask(task.id)}>Remove</Button>
          </ListItem>
        ))}
    </List>
  );
};

export default TaskList;