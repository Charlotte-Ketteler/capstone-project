import styled from "styled-components";
import { useState } from "react";
import BookingForm from "@/components/BookingForm";

export default function TimeslotButton({ timeSlot, horsesList }) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeSlot.startTime} - {timeSlot.endTime}
      </ButtonsTimeSlots>
      {showForm && <BookingForm horsesList={horsesList} />}
    </div>
  );
}

const ButtonsTimeSlots = styled.button`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: white;
  border-radius: 5px;
`;
