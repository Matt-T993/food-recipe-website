import React from "react";

const Step = ({ steps }) => {
  return (
    <div className="recipe__info--steps">
      <h3 className="recipe__content--subtitle">Instructions</h3>
      <ol className="steps">
        {steps.map((step, index) => (
          <li className="step" key={index}>
            <span className="number">{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Step;
