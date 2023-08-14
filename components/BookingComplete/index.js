import { styled } from "styled-components";
import Link from "next/link";
import { HorsesList } from "@/lib/data";

export default function BookingComplete() {
  return (
    <>
      <Card>
        <h1>Dein Termin wurde gebucht!</h1>
     
      </Card >
      <Link href="/BookingOverviewPage">Terminübersicht</Link>
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