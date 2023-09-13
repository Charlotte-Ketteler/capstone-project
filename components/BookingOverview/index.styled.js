import styled from "styled-components";

export const DeleteButtonOverview = styled.button`
  padding: 3px 10px;
  margin: 8px 5px 0px 245px;
  border-radius: 50px;
  background-color: #9540c6;
  border-style: none;
  color: white;
  width: 5px;
  display: flex;

  justify-content: center;
`;

export const CardStyled = styled.div`
  width: 80%;
  height: 300px;
  border-radius: 20px;
  border-style: solid;
  border-color: black;
  display: flex;
  align-items: flex-start;
  margin-left: 35px;
  flex-direction: column;
  overflow-y: auto;
  padding: 10px;
  border-color: #5abddc;
  box-shadow: 0px 2px 4px rgba(0, 0.6, 0.1, 0.3);
`;

export const DateStyled = styled.p`
  font-size: 15px;
`;

export const BoldPTag = styled.p`
  font-weight: bold;
  display: inline;
`;
