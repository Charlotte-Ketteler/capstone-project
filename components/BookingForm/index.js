import { HorsesList } from "@/lib/data";
import { useState } from "react";

import {
  SubmitButton,
  Chip,
  ChoosePeopleAndHorses,
  SelectStyle,
} from "./index.styled";
import { CardStyled } from "../BookingOverview/index.styled";

export default function BookingForm({
  timeSlotID,
  onHandleSubmit,
  booking,
  available = 8,
  availableHorses = HorsesList,
}) {
  const [numberOfPeople, setNumberOfPeople] = useState(
    booking?.numberOfPeople ?? 1
  );

  const [selectedHorses, setSelectedHorses] = useState(
    booking?.horses.map((horse) => horse.horseId) || []
  );

  function handleSubmit(event) {
    event.preventDefault();
    const bookingInfo = {
      timeslot_id: timeSlotID,
      booking_id: booking?.id,
      numberOfPeople: numberOfPeople,
      horses: selectedHorses,
    };
    onHandleSubmit(bookingInfo);
  }

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
    setSelectedHorses([]);
  };

  function handleSelectHorse(id) {
    if (!selectedHorses.includes(id)) {
      if (selectedHorses.length === numberOfPeople) {
        return;
      }
      setSelectedHorses([...selectedHorses, id]);
    } else {
      setSelectedHorses(selectedHorses.filter((horseID) => horseID !== id));
    }
  }

  return (
    <ChoosePeopleAndHorses>
      <form onSubmit={handleSubmit}>
        <label>
          Personenanzahl:
          <SelectStyle
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
          >
            {Array.from({ length: available }, (_, i) => i + 1).map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </SelectStyle>
        </label>
        <br />
        <br />
        <div>
          <label>Du kannst bis zu {numberOfPeople} Pferde auswählen:</label>
          {availableHorses.map(({ id, name }) => (
            <Chip
              key={id}
              type="button"
              selected={selectedHorses.includes(id)}
              onClick={() => handleSelectHorse(id)}
            >
              {name}
            </Chip>
          ))}
        </div>

        <br />
        <SubmitButton type="submit">Buchen</SubmitButton>
      </form>
    </ChoosePeopleAndHorses>
  );
}
