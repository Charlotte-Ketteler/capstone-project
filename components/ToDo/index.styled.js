import styled from "styled-components";

export const ToDoBody = styled.div`
  margin-left: 25px;
`;

export const InputField = styled.input`
  border-radius: 5px;
  border-color: #edebee;
  width: 210px;
`;

export const AddButton = styled.button`
  border-radius: 5px;
  border-style: none;
  margin-left: 10px;
  background-color: #5abddc;
  height: 20px;
  width: 20px;
`;

export const DeleteButtonToDo = styled.button`
  padding: 3px 10px;
  margin: -18px 5px 10px 200px;
  border-radius: 50px;
  background-color: #9540c6;
  border-style: none;
  color: white;
  width: 5px;
  display: flex;
  justify-content: center;
`;

export const ToDoBackground = styled.li`
  background-color: #edebee;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  list-style: none;
  font-size: 14px;
`;

export const ToDoP = styled.p`
  font-size: 30px;
  margin-top: 120px;
  margin-left: 35px;
`;

export const InputPosition = styled.div`
  margin-left: 45px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
