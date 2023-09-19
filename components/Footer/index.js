import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { FooterIcons } from "./index.styled";

export default function Footer() {
  return (
    <>
      <FooterBox>
        <nav>
          <FooterIcons>
            <Link href="/">
              <Image src="/zuhause.png" alt="Home" width={30} height={30} />
            </Link>
            <Link href="/BookingPage">
              <Image src="/Calender.png" alt="Buchung" width={30} height={30} />
            </Link>
            <Link href="/BookingOverviewPage">
              <Image
                src="/reiten.png"
                alt="Nächste Reitstunde"
                width={30}
                height={30}
              />
            </Link>
            <Link href="/ToDoPage">
              <Image src="/checkliste.png" alt="ToDo" width={30} height={30} />
            </Link>
          </FooterIcons>
        </nav>
      </FooterBox>
    </>
  );
}

const FooterBox = styled.div`
background-color: white; 
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  margin: 0;
  }
`;
