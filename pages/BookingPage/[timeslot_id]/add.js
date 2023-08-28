import { useRouter } from "next/router";
import BookingForm from "@/components/BookingForm";

export default function add({ timeSlots, onHandleSubmit }) {
  const router = useRouter();
  const { timeslot_id } = router.query;
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

  return (
    <BookingForm
      timeSlotID={timeSlot.id}
      onHandleSubmit={onHandleSubmit}
      available={8 - numberOfPeopleBooked}
    />
  );
} 