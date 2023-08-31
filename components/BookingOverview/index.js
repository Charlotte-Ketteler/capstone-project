import Link from "next/link";
import { HorsesList } from "@/lib/data";
import { CardStyled } from "@/Styles/CardStyled";
import styled from "styled-components";

import { DeleteButton } from "@/Styles/Buttons";

export default function BookingOverview({
  timeSlots,
  recentlyBooked,
  onHandleDelete,
}) {
  const bookedTimeslot = timeSlots.find(
    (entry) => entry.id === recentlyBooked?.timeslot_id
  );
  return (
    <>
      <CardStyled>
        <ImageStyled
          src="/cowgirl_on_white_horse.jpg"
          alt="cowgirl on white horse"
          height={220}
          width={332}
        />
        <p>Datum: {bookedTimeslot?.currentDate}</p>
        <p>Uhrzeit: {bookedTimeslot?.startTime}</p>
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
      {/*<DeleteButton
        type="button"
        onClick={() =>
          onHandleDelete(recentlyBooked.timeslot_id, recentlyBooked.booking_id)
        }
      >
        löschen
      </DeleteButton>*/}

   
    </>
  );
}

const ImageStyled = styled.img`
  border-radius: 10px;
`; 