// components/ui/textarea.tsx

import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Enter text...'}
      className={`border p-2 rounded w-full h-32 ${className}`}
      {...rest}
    />
  )
}
