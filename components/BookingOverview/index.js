import Link from "next/link";
import { HorsesList } from "@/lib/data";
import { ImageCowgirlOnWhiteHorse } from "../../Styles/ImageCowgirlOnWhiteHorse";
import { CardStyled } from "@/Styles/CardStyled";
import { useState } from "react";

export default function BookingOverview({ recentlyBooked, timeSlots }) {
  const [toDelete, setToDelete] = useState(false);

  function handleDelete() {
    setToDelete(true);
  }

  return (
    <>
      {toDelete ? null : (
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
          <button onClick={handleDelete}>löschen</button>
        </CardStyled>
          
      )}
      
        <Link href="/">Back to Homepage</Link>
        <br />
        <Link href="/BookingPage">Termin Buchen</Link>
     
    </>
  );
}
