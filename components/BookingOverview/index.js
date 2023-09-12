import Link from "next/link";
import { HorsesList } from "@/lib/data";
import styled from "styled-components";

import { DeleteButtonOverview, CardStyled } from "./index.styled";

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
        <DeleteButtonOverview
          type="button"
          onClick={() =>
            onHandleDelete(
              recentlyBooked.timeslot_id,
              recentlyBooked.booking_id
            )
          }
        >
          x
        </DeleteButtonOverview>
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
    </>
  );
}

const ImageStyled = styled.img`
  border-radius: 20px;
`;
