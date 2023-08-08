import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import AppointmentOverview from "../AppointmentOverview";

export default function BookingForm({ horsesList }) {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedHorses, setSelectedHorses] = useState([]);
  
 
  const router = useRouter();

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
    setSelectedHorses([]);
 
  };


  
  function handleSelectHorse(id, name, time) {
    console.log("Hi");
    if (!selectedHorses.includes(id)) {
      if (selectedHorses.length === numberOfPeople) {
        return;
      }
      setSelectedHorses([...selectedHorses, id]);
     
    } else {
      setSelectedHorses(selectedHorses.filter((horseID) => horseID !== id));
    }
  }



  function handleSubmit(event) {
    event.preventDefault();
    router.push("/BookingSuccessful");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        value={numberOfPeople}
      
      >
        Personenanzahl:
        <select value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </label>

      <div>
        <label>Du kannst bis zu {numberOfPeople} Pferde auswählen:</label>
        {horsesList.map(({ name, id }) => (
          <Chip
            key={id}
            type="button"
            selected={selectedHorses.some(
              (selectedHorseID) => id === selectedHorseID
            )}
            onClick={() => handleSelectHorse(id, name)}
          >
            {name}
          </Chip>
        ))}
      </div>
      <button type="submit">Buchen</button>
      <AppointmentOverview horsesList={horsesList} numberOfPeople={numberOfPeople} selectedHorses={selectedHorses}/>
    
    </form>
  );
}

const Chip = styled.button`
  padding: 3px 10px;
  margin: 0px 5px;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? "rgb(118,181,197)" : "rgb(171,219,227)"};
  border-color: rgb(171, 219, 227);
`;
