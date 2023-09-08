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
  background-color: #F2F8FF;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: serif;
`;
