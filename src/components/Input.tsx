import React, { useState } from 'react'

interface InputProps {
  onEnter: (value: string) => void
}

const Input: React.FC<InputProps> = ({ onEnter }) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      setInputValue('')
      onEnter(inputValue)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
      <input className="w-full bg-gray-800 rounded-full px-8 py-2 text-lg text-white mb-6"
             placeholder="What needs to be done?"
             autoFocus type="text"
             value={inputValue}
             onChange={handleChange}
             onKeyDown={handleKeyDown}
      />
  )
}

export default Input
