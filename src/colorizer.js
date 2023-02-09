import React, { useState } from "react";

function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState("project");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    alert(`Selected option: ${event.target.value}`);
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          value="project"
          checked={selectedOption === "project"}
          onChange={handleOptionChange}
        />
        <label>Project</label>
      </div>
      <div>
        <input
          type="radio"
          value="designs"
          checked={selectedOption === "designs"}
          onChange={handleOptionChange}
        />
        <label>Designs</label>
      </div>
    </div>
  );
}

export default RadioButtonExample;
