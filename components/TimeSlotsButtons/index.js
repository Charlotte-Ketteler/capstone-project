
import React, { useState } from "react";
import styled from "styled-components";

export default function TimeSlotsButtons({
  selectedTimeSlot,
  handleButtonClick,
  handleSubmit,
  formData,
  handleSelectChange
}) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleButtonClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot === selectedTimeSlot ? null : timeSlot);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <>
      <div>
        <ButtonsOrder>
        {TimeslotsAndBookings.map((timeslot) => (
            <ButtonStyle
              key={timeslot.id}
              onClick={() => handleButtonClick(timeslot.startTime)}
              active={selectedTimeSlot === timeslot.startTime}
            >
              {timeslot.startTime} - {timeslot.endTime}
            </ButtonStyle>
          ))}

        </ButtonsOrder>
      </div>

      {/* Conditional rendering of the forms */}
      {selectedTimeSlot && (
       <FormContainer>
       <form onSubmit={handleSubmit}>
         <h2>Uhrzeit {selectedTimeSlot}</h2>
         <h3>Personenanzahl:</h3>
         <input
           type="number"
           name="numberOfPeople"
           value={formData.numberOfPeople}
           onChange={handleSelectChange}
         />

         <h3>Pferd:</h3>
         <select
           name="selectedHorseId"
           id="Pferde"
           value={formData.selectedHorseId}
           onChange={handleSelectChange}
         >
           <option value="">--Wähle dein Pferd--</option>
           {HorsesList.map((horse) => (
             <option key={horse.id} value={horse.id}>
               {horse.name}
             </option>
           ))}
         </select>
         <button type="submit">buchen</button>
       </form>
     </FormContainer>
      )}
    </>
  );
}

const ButtonsOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 85%;
  border-style: none;
  background-color: white;
`;

const ButtonStyle = styled.button`
  width: 80%;
  background-color: ${({ active }) => (active ? "lightblue" : "white")};
`;

const FormContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
`;

