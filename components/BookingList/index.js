import Link from "next/link";
import { useState } from "react";

import {
  BookedButton,
  StyledLink,
  DeleteButton,
  NewBookingButton,
} from "./index.styled";

export default function BookingList({ timeslot, onHandleDelete }) {
  const numberOfPeopleBooked = timeslot.bookings.reduce(
    (acc, curr) => acc + curr.numberOfPeople,
    0
  );

  return (
    <div>
      {timeslot.bookings.map((booking) => (
        <div key={booking.id}>
          <BookedButton>
            <StyledLink
              href={`/BookingPage/${timeslot.id}?booking_id=${booking.id}`}
            >
              Bereits gebucht: {booking.numberOfPeople}
            </StyledLink>
          </BookedButton>

          <DeleteButton onClick={() => onHandleDelete(timeslot.id, booking.id)}>
            x
          </DeleteButton>
        </div>
      ))}
      {numberOfPeopleBooked < 8 && (
        <div>
          <NewBookingButton>
            <StyledLink href={`/BookingPage/${timeslot.id}/add`}>
              Neue Buchung
            </StyledLink>
          </NewBookingButton>
        </div>
      )}
    </div>
  );
}
