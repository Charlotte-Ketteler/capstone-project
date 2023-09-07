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
  margin: 0px 5px 10px 0px;
  border-radius: 10px;
  background-color: #76b5c5;
`;
