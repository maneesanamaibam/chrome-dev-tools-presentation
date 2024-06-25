import React, { useState } from "react";

const BaseInput = ({ placeholder }) => {
  const [value, setValue] = useState("");

  // Check if value is a number or less than 6 digits
  const handleChange = (e) => {
    if (!isNaN(parseInt(e.target.value)) && e.target.value.length <= 6) {
      setValue(e.target.value);
    } else {
      alert("Please enter only numeric values upto 6 digits");
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      maxLength={6}
    />
  );
};

export default BaseInput;
