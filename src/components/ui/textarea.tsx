import React from "react";

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Enter text..."}
      className="border p-2 rounded w-full h-32"
    />
  );
};
