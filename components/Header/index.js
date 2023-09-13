import { styled } from "styled-components";
import { HorseLogo, HomeBody } from "../Homepage/index.styled";
export default function Header() {
  return (
    <>
      <HomeBody>
        <HeaderColor>
          <h1>Hill Haven Ranch</h1>

          <HorseLogo
            src="/pferd.png"
            alt="cowgirl on white horse"
            height={130}
            width={150}
          />
        </HeaderColor>
      </HomeBody>
    </>
  );
}
const HeaderColor = styled.div`
font-size: 10px; 
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: serif;
  position: fixed;
  top: 0;
  width: 100%;
 background-color: white; 
  }
`;
