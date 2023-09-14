import styled from "styled-components";

export const SubmitButton = styled.button`
margin: 20px 0px 5px 270px;
padding: 3px 10px;
border-style: solid; 
border-radius: 20px; 
border-color: #5ABDDC;
box-shadow: 0px 2px 4px rgba(0, 0.6, 0.1, 0.3);
transition: background-color 0.3s, box-shadow 0.3s; /* Add transition for smooth effect */

&:hover {
  background-color: #FFFFFF; 

`;

export const Chip = styled.button`
  padding: 3px 10px;
  margin: 5px 5px;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? "rgb(90,189,220)" : "rgb(237,235,238)"};
  border-color: rgb(171, 219, 227);
  border-style: none;
  box-shadow: 0px 2px 4px rgba(0, 0.6, 0.1, 0.3);
`;

export const ChoosePeopleAndHorses = styled.div`
  margin-top: 180px;
  margin-left: 20px;
`;

export const SelectStyle = styled.select`
  border-radius: 8px;
  margin-left: 5px;
`;
