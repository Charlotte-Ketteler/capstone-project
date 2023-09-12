import styled from "styled-components";
import Link from "next/link";

export const BookedButton = styled.button`
border-radius: 20px; 
border-color: #E032F6;
background-color: white; 
height: 25px; 
width: 125px; 
margin: 10px 0px 10px 10px; 
border-style: solid; 
`;

export const NewBookingButton = styled.button`
border-radius: 20px; 
background-color: #5ABDDC;
border-style: none; 
height: 25px; 
width: 125px; 
margin: 10px 0px 10px 10px; 
`;

export const StyledLink = styled(Link)`
color: black;
text-decoration: none;

`;


export const DeleteButton = styled.button`
  padding: 3px 10px;
  margin: -33px 5px 0px 150px;
  border-radius: 50px;
  background-color: #9540C6;
  border-style: none; 
  color: white;
  width: 5px; 
  display: flex; 
  
justify-content: center; 

`;