import { useRouter } from "next/router";
import BookingForm from "@/components/BookingForm";
import { HorsesList } from "@/lib/data";

export default function Add({ timeSlots, onHandleSubmit }) {
  const router = useRouter();
  const { timeslot_id, booking_id } = router.query;
  const timeSlot = timeSlots.find(
    (timeslotEntry) => timeslotEntry.id == timeslot_id
  );

  if (!timeSlot) {
    return <div>timeslot not available</div>;
  }

  const numberOfPeopleBooked = timeSlot.bookings.reduce(
    (acc, curr) => acc + curr.numberOfPeople,
    0
  );

  const horsesAlreadySelected = timeSlot.bookings.reduce((acc, curr) => {
    const bookedHorses = curr.horses.map((horse) => horse.horseId);
    acc.push(...bookedHorses);
    return acc;
  }, []);

  const ah = [
    ...HorsesList.filter((horse) => !horsesAlreadySelected.includes(horse.id)),
  ];

  return (
    <BookingForm
      timeSlotID={timeSlot.id}
      onHandleSubmit={onHandleSubmit}
      available={8 - numberOfPeopleBooked}
      availableHorses={ah}
    />
  );
}
