import { useRouter } from "next/router";
import BookingForm from "@/components/BookingForm";
import { HorsesList } from "@/lib/data";

export default function Booking({ timeSlots, onHandleSubmit }) {
  const router = useRouter();
  const { timeslot_id, booking_id } = router.query;

  if (!timeslot_id || !booking_id) {
    return;
  }

  const timeSlot = timeSlots.find(
    (timeslotEntry) => timeslotEntry.id == timeslot_id
  );

  if (!timeSlot) {
    return <div>timeslot not available</div>;
  }

  const booking = timeSlot.bookings.find((entry) => entry.id == booking_id);

  const numberOfPeopleBooked = timeSlot.bookings.reduce(
    (acc, curr) => acc + curr.numberOfPeople,
    0
  );

  const horsesAlreadySelected = timeSlot.bookings.reduce((acc, curr) => {
    const bookedHorses = curr.horses.map((horse) => horse.horseId);
    acc.push(...bookedHorses);
    return acc;
  }, []);

  return (
     <BookingForm
      timeSlotID={timeSlot.id}
      onHandleSubmit={onHandleSubmit}
      booking={booking}
      available={8 - numberOfPeopleBooked + booking.numberOfPeople}
      availableHorses={[
        ...booking.horses.map((horse) =>
          HorsesList.find((h) => h.id === horse.horseId)
        ),
        ...HorsesList.filter(
          (horse) => !horsesAlreadySelected.includes(horse.id)
        ),
      ]}
    />
  );
} 