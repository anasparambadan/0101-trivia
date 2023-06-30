import React from "react";

const Question = ({ data, optionSelected, optionSelectFunc}) => {

   

  return (
    <div className="single-question">
      <span className="question">{data.id}.{data.question}</span>
      <ul>
        {data.options.map((option, i) => {
          return (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name={`question-${data.id}`}
                  id={`option-${i}`}
                  value={i}
                  key={i}
                  checked = {optionSelected === option}
                  onChange={()=>optionSelectFunc(option)}
                />
                {option}
              </label>
            </li>
          );
        })}
      </ul>

      
    </div>
  );
};

export default Question;
