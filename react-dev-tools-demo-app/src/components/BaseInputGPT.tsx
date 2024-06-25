import React, { useState, ChangeEvent } from "react";

interface BaseInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const BaseInput: React.FC<BaseInputProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Check if the entered value is numeric and up to 6 digits
    if (/^\d{0,6}$/.test(inputValue)) {
      setValue(inputValue);
      // Pass the value to the parent component if provided
      if (onChange) {
        onChange(inputValue);
      }
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default BaseInput;
