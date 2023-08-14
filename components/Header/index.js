import Image from "next/image";
import { styled } from "styled-components";
export default function Header() {
  return (
    <>
    <HeaderColor>
    <h1>Hill Haven Ranch</h1>
    </HeaderColor>
     
    </>
  );
}
 const HeaderColor = styled.div`
 background-color: #DAE9FA; 
 height: 100px;
 display: flex; 
  align-items: center; 
  justify-content: center; 

 `;

