import BookingOverview from "@/components/BookingOverview";
import { useState } from "react";

export default function BookingOverviewPage({
  recentlyBooked,
  timeSlots,
  handleSubmit,
  handleDelete
}) {
console.log("show:", timeSlots)



  return (
    <>
    <h1>Terminübersicht</h1>
    <BookingOverview recentlyBooked={recentlyBooked}  timeSlots={timeSlots} handleSubmit={handleSubmit} handleDelete={handleDelete}/>
    </>
  );
}