import Link from "next/link";
import { HorsesList } from "@/lib/data";
import { ImageCowgirlOnWhiteHorse } from "../../Styles/ImageCowgirlOnWhiteHorse";
import { CardStyled } from "@/Styles/CardStyled";

import { DeleteButton } from "@/Styles/Buttons";

export default function BookingOverview({ recentlyBooked, timeSlots, handleDelete }) {
console.log("Delete:", handleDelete)
console.log("Show recentlyBooked", recentlyBooked)
  return (
    <>
     
        <CardStyled>
          <ImageCowgirlOnWhiteHorse />
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
          <DeleteButton type="button" onClick={() => handleDelete(recentlyBooked.id, recentlyBooked.bookingID)}>löschen</DeleteButton>
        </CardStyled>
   
    
      
        <Link href="/">Back to Homepage</Link>
        <br />
        <Link href="/BookingPage">Termin Buchen</Link>
     
    </>
  );
}

