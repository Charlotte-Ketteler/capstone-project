import Link from "next/link";

export default function BookingList({ timeslot, onHandleDelete }) {
  const numberOfPeopleBooked = timeslot.bookings.reduce(
    (acc, curr) => acc + curr.numberOfPeople,
    0
  );
  return (
    <ul>
      {timeslot.bookings.map((booking) => (
        <li key={booking.id}>
          <Link href={`/BookingPage/${timeslot.id}?booking_id=${booking.id}`}>
            Anzahl Personen: {booking.numberOfPeople}
          </Link>
          <button onClick={() => onHandleDelete(timeslot.id, booking.id)}>
            Buchung löschen
          </button>
        </li>
      ))}
      {numberOfPeopleBooked < 8 && (
        <div>
          <Link href={`/BookingPage/${timeslot.id}/add`}>
            Neue Buchung hinzufügen
          </Link>
        </div>
      )}
    </ul>
  );
} 