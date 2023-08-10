import { styled } from "styled-components";

export default function AppointmentOverview({
  numberOfPeople,
  selectedHorses,
  horsesList,
  appointmentTime
}) {
  return (
    <>
    <Card>
      <p>Personenanzahl: {numberOfPeople}</p>
      <p>Ausgewählte Pferde:</p>
      <ul>
        {selectedHorses.map((horseId) => (
          <li key={horseId}>
            {horsesList.find((horse) => horse.id === horseId)?.name}
          </li>
        ))}
      </ul>
      <p>Uhrzeit: {appointmentTime}</p>
      </Card>
    </>
  );
}
const Card = styled.div`
  width: 90%;
  height: 500px;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
`;
