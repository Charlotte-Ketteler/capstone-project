import Timeslots from "@/components/Timeslots";
import { getCurrentDate } from "@/lib/data";
import { ButtonBody, Date } from "./index.styled";
import { BoldPTag } from "@/components/BookingOverview/index.styled";

export default function BookingPage({
  onHandleDelete,
  timeSlots,
  onHandleSubmit,
  recentlyBooked,
}) {
  return (
    <>
      <ButtonBody>
        <Date>
          <BoldPTag>Datum:</BoldPTag> {getCurrentDate()}{" "}
        </Date>

        <Timeslots
          onHandleDelete={onHandleDelete}
          timeSlots={timeSlots}
          onHandleSubmit={onHandleSubmit}
          recentlyBooked={recentlyBooked}
        />
      </ButtonBody>
    </>
  );
}






