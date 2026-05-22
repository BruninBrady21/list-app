import React from "react";
import styled from "styled-components";

interface TaskListProps {
  tasks: { id: number; name: string }[];
  onRemoveTask: (id: number) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask }) => {
  return (
    <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            {task.name}
            <Button onClick={() => onRemoveTask(task.id)}>Remove</Button>
          </ListItem>
        ))}
    </List>
  );
};

export default TaskList;