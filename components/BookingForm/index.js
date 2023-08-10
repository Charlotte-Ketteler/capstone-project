import styled from "styled-components";

export default function BookingForm({
  horsesList,
  handleSubmit,
  numberOfPeople,
  handleNumberOfPeopleChange,
  selectedHorses,
  handleSelectHorse,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label value={numberOfPeople}>
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
        {horsesList.map(({ name, id, time }) => (
          <Chip
            key={id}
            type="button"
            selected={selectedHorses.includes(id)}
            onClick={() => handleSelectHorse(id, time, name)}
          >
            {name}
          </Chip>
        ))}
      </div>
      <button type="submit">Buchen</button>
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
