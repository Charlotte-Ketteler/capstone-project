
import {useRouter} from "next/router"
import AppointmentOverview from "@/components/AppointmentOverview";

export default function BookingOverview({horsesList,numberOfPeople,selectedHorses}){
   
    return(
        <>
            <AppointmentOverview horsesList={horsesList} numberOfPeople={numberOfPeople} selectedHorses={selectedHorses}/>
        </>
    )
}