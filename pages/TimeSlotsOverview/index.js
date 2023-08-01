import TimeSlotsButtons from "@/components/TimeSlotsButtons";
import {useState} from "react";

export default function TimeSlotsOverview(){
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    numberOfPeople: "",
    selectedHorseId: "",
  });

  const handleButtonClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot === selectedTimeSlot ? null : timeSlot);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  return(
        <>
        <h1>Test</h1>
        <TimeSlotsButtons
        selectedTimeSlot={selectedTimeSlot}
        handleButtonClick={handleButtonClick}
        handleSubmit={handleSubmit}
        formData={formData}
        handleSelectChange={handleSelectChange}
        />
        </>
    )
}