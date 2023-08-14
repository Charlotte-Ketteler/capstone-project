import Link from "next/link";
import { HorsesList } from "@/lib/data";
import { ImageCowgirlOnWhiteHorse } from "../../Styles/ImageCowgirlOnWhiteHorse";
import { CardStyled } from "@/Styles/CardStyled";

export default function BookingOverview({ recentlyBooked, timeslots}) {
  console.log("Show:", recentlyBooked);

  return (
    <>
   <CardStyled>
      <ImageCowgirlOnWhiteHorse/>
        <p>Uhrzeit: {recentlyBooked?.startTime}</p>
        <div>Personen: {recentlyBooked?.numberOfPeople}</div>
        <p> Pferde:</p>
        <ul>
          {recentlyBooked?.horses.map((horseID) => (
            <li key={horseID}>
              {HorsesList.find((horse) => horse.id === horseID).name}
            </li>
          ))}
        </ul>
    
        </CardStyled>
      <Link href="/">Back to Homepage</Link>
      <br />
      <Link href="/BookingPage">Termin Buchen</Link>
    </>
  );
}
