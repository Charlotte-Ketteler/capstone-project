import Head from "next/head";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import { HorsesList } from "@/lib/data";
import { useRouter } from "next/router";
import { TimeSlotsAndBookings } from "@/lib/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
 
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  
  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
    setSelectedHorses([]);
  };

  function handleSelectHorse(id, name, time) {
    //console.log("Hi");
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
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout>
        <Component
          {...pageProps}
          horsesList={HorsesList}
          numberOfPeople={numberOfPeople}
          selectedHorses={selectedHorses}
          handleNumberOfPeopleChange={handleNumberOfPeopleChange}
          handleSelectHorse={(id, name, time) =>
            handleSelectHorse(id, name, time)
          }
          handleSubmit={handleSubmit}
      
          appointmentTime={appointmentTime}
         
          TimeSlotsAndBookings={TimeSlotsAndBookings}
        />
      </Layout>
    </>
  );
}
