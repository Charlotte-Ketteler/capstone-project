import BookingForm from "@/components/BookingForm";
import { useState } from "react";
import { HorsesList } from "@/lib/data";
import { useRouter } from "next/router";
import { TimeSlotsAndBookings } from "@/lib/data";
import Timeslots from "@/components/Timeslots";

export default function BookingPage() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
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
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
    //const time = timeSlot.startTime;
    console.log("Hi");
    //setAppointmentTime(time);
  };

  return (
    <>
      <Timeslots
        horsesList={HorsesList}
        numberOfPeople={numberOfPeople}
        selectedHorses={selectedHorses}
        handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        handleSelectHorse={handleSelectHorse}
        handleSubmit={handleSubmit}
        showForm={showForm}
        appointmentTime={appointmentTime}
        toggleForm={toggleForm}
        TimeSlotsAndBookings={TimeSlotsAndBookings}
      />
    </>
  );
}
