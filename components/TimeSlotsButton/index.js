import styled from "styled-components";
import { useState } from "react";
import BookingForm from "@/components/BookingForm";



export default function TimeslotButton({ timeSlot, horsesList }) {
  const [showForm, setShowForm] = useState(false);
  const [appointmentTime, setAppointmentTime] = useState("");
  const toggleForm = () => { 
    setShowForm((prevShowForm) => !prevShowForm);
    const time = timeSlot.startTime;
    console.log("Hi");
    setAppointmentTime(time);
  };
  



  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeSlot.startTime} - {timeSlot.endTime}
      </ButtonsTimeSlots>
      {showForm && <BookingForm horsesList={horsesList} timeSlot={timeSlot}/>}
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
