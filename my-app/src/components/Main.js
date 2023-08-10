import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookingForm from "./bookingForm.js";
import ConfirmedBooking from "./confirmedBooking.js";
import Header from "./Header";

const Main = () => {
  // Move the availableTimes state to the Main component
  const [availableTimes, setAvailableTimes] = useState([]);

  // Define the fetchAPI function
  const fetchAPI = function (date) {
    // ... (Your fetchAPI logic)
  };

  // Define the submitForm function
  const submitForm = function (formData) {
    // ... (Your submitForm logic)
  };

  // Other logic remains the same...

  // Update the updateTimes function to use setAvailableTimes
  function updateTimes(date) {
    setAvailableTimes(fetchAPI(new Date(date)));
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* Pass the availableTimes state and updateTimes function as props */}
        <Route
          path="/booking"
          element={
            <BookingForm
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;