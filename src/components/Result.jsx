import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/");
  };

  const location = useLocation();

  return (
    <div className="result">
      <span className="answer">
You correctely answered <span className="score">{location.state.score}</span> of 5 questions
      </span>
      <button onClick={handleReset} className="reset-button">Reset</button>
    </div>
  );
};

export default Result;
