import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-header">
        <button className="dropdown-button">
          {selectedOption || 'Select an option'}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {data.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;