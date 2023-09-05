import Link from "next/link";
import { useState } from "react";
import { DeleteButton } from "@/Styles/Buttons";
import { styled } from "styled-components";
import { Body } from "@/Styles/Body";

export default function BookingList({ timeslot, onHandleDelete }) {
  const numberOfPeopleBooked = timeslot.bookings.reduce(
    (acc, curr) => acc + curr.numberOfPeople,
    0
  );

  return (
    <div>
      {timeslot.bookings.map((booking) => (
        <li key={booking.id}>
          <Link href={`/BookingPage/${timeslot.id}?booking_id=${booking.id}`}>
            Bereits vergebene Plätze: {booking.numberOfPeople}
          </Link>
          <DeleteButton onClick={() => onHandleDelete(timeslot.id, booking.id)}>
            Buchung löschen
          </DeleteButton>
        </li>
      ))}
      {numberOfPeopleBooked < 8 && (
        <div>
          <Link href={`/BookingPage/${timeslot.id}/add`}>
            Neue Buchung hinzufügen
          </Link>
        </div>
      )}
    </div>
  );
}
