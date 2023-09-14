import { ArrowDown, HowdyH1, HomeBody, TextHome } from "./index.styled";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <HomeBody>
        <HowdyH1>Howdy!</HowdyH1>
        <TextHome>Starte direkt durch und verwalte deine Reitstunden.</TextHome>
        <Link href="/BookingPage">
          <ArrowDown
            src="/pfeil-nach-unten.png"
            alt="arrows down"
            height={50}
            width={50}
          />
        </Link>
      </HomeBody>
    </>
  );
}
