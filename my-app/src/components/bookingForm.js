import React from "react";
import { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [time, setTime] = useState("");
  // In the JSX, use the availableTimes prop to populate the select options
  <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
    {availableTimes.map((timeOption) => (
      <option key={timeOption} value={timeOption}>
        {timeOption}
      </option>
    ))}
  </select>;

  // ...
};

export default BookingForm;
// Compare this snippet from my-app\src\components\bookingForm.js:
