import BookingComplete from "@/components/BookingComplete"

export default function BookingSuccessful({ recentlyBooked }){

    return(
        <>
        <BookingComplete recentlyBooked={ recentlyBooked }/>
        </>
    )
}