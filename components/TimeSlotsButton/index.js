import styled from "styled-components";
import BookingForm from "@/components/BookingForm";



export default function TimeslotButton({ timeSlot, horsesList, showForm,
    appointmentTime, toggleForm, selectedHorses, handleSelectHorse, handleNumberOfPeopleChange}) {
 



  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeSlot.startTime} - {timeSlot.endTime}
      </ButtonsTimeSlots>
      {showForm && <BookingForm horsesList={horsesList} timeSlot={timeSlot} selectedHorses={selectedHorses} handleSelectHorse={handleSelectHorse} handleNumberOfPeopleChange={handleNumberOfPeopleChange}/>}
      {showForm && <p onClick={toggleForm}>Uhrzeit: {appointmentTime}</p>}
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
