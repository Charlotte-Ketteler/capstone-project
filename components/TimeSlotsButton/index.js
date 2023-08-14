import styled from "styled-components";
import BookingForm from "@/components/BookingForm";
import { useState } from "react";

export default function TimeslotButton({ onHandleSubmit, appointment, numberOfPeople, recentlyBooked }) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {appointment.startTime} - {appointment.endTime}
      </ButtonsTimeSlots>
      {showForm && (
        <BookingForm
          onHandleSubmit={onHandleSubmit}
          appointment={appointment}
          numberOfPeople={numberOfPeople}
          recentlyBooked={recentlyBooked}
        />
      )}
    </div>
  );
}

const ButtonsTimeSlots = styled.button`
  margin-left: 35%;
  margin-bottom: 10px; 
  margin-top: 10px; 
  background-color: white;
  border-radius: 5px;

`; 