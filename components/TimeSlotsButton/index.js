import styled from "styled-components";
import BookingList from "@/components/BookingList";
import { useState } from "react";

export default function TimeslotButton({
  onHandleSubmit,
  timeslot,
  onHandleDelete,
}) {
  const [showList, setShowList] = useState(false);

  const toggleForm = () => {
    setShowList((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeslot.startTime} - {timeslot.endTime}
      </ButtonsTimeSlots>
      {showList && (
        <BookingList
          onHandleSubmit={onHandleSubmit}
          timeslot={timeslot}
          onHandleDelete={onHandleDelete}
          
        />
      )}
    </div>
  );
}

const ButtonsTimeSlots = styled.button`
  padding: 3px 10px;
  margin: 0px 5px 20px 0px;
  border-radius: 20px;
  background-color:  #EAE6EC;
  border-style: none;
  box-shadow: 0px 2px 4px rgba(0, 0.6, 0.1, 0.3);

  height: 25px; 
width: 150px; 
`;