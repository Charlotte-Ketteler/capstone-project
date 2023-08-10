import styled from "styled-components";
import BookingForm from "@/components/BookingForm";
import { useState } from "react";

export default function TimeslotButton({
  timeSlot,
  horsesList,

  appointmentTime,
  selectedHorses,
  handleSelectHorse,
  handleNumberOfPeopleChange,
  numberOfPeople,
}) {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeSlot.startTime} - {timeSlot.endTime}
      </ButtonsTimeSlots>
      {showForm && (
        <BookingForm
          horsesList={horsesList}
          timeSlot={timeSlot}
          selectedHorses={selectedHorses}
          handleSelectHorse={handleSelectHorse}
          handleNumberOfPeopleChange={handleNumberOfPeopleChange}
          appointmentTime={appointmentTime}
          numberOfPeople={numberOfPeople}
        />
      )}
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
