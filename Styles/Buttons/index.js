import styled from "styled-components";

export const DeleteButton = styled.button`
  padding: 3px 10px;
  margin: 0px 5px;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? "rgb(118,181,197)" : "rgb(171,219,227)"};
  border-color: rgb(171, 219, 227);
`;

export const Chip = styled.button`
  padding: 3px 10px;
  margin: 0px 5px;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? "rgb(118,181,197)" : "rgb(171,219,227)"};
  border-color: rgb(171, 219, 227);
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 50px;
`;

export const SubmitButton = styled.button`
  margin: 20px 0px 5px 0px;
  padding: 3px 10px;

  border-radius: 10px;
`;
