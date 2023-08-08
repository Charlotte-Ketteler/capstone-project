import { styled } from "styled-components";

export default function BookingComplete() {
  return (
    <>
      <Card>
        <h1>Dein Termin wurde gebucht!</h1>
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 90%;
  height: 500px;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
`;
