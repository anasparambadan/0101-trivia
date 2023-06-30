import React, { useState } from "react";
import QuestionData from "./QuizData";
import Question from "./Question";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleOptionSelection = (questionId, optionSelect) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionSelect }));
  };

  const correctAnswers = {
    1: "Object",
    2: "stringify()",
    3: "Cassandra",
    4: "async",
    5: "clearInterval",
  };

  const evaluateAnswer = () => {
    let totalScore = 0;
    Object.keys(answers).forEach((questionId) => {
      const selectedOption = answers[questionId];
      const correctOption = correctAnswers[questionId];
      if (selectedOption === correctOption) {
        totalScore++;
      }
    });
    return totalScore;
  };

  const handleSubmit = () => {
    let score = evaluateAnswer();
    navigate("/result", { state: { score } });
  };

  const attempted = Object.keys(answers).length;

  return (
    <div className="home">
      <div className="content">
        <h1 className="main-heading">JavaScript MCQ Trivia</h1>
        {QuestionData.map((item, i) => {
          return (
            <Question
              data={item}
              key={item.id}
              optionSelected={answers[item.id] || ""}
              optionSelectFunc={(option) =>
                handleOptionSelection(item.id, option)
              }
            />
          );
        })}

        <button onClick={handleSubmit} disabled={attempted < 5} className={attempted<5?'disabled':'submitButton'}>
          {attempted < 5 ? "Should attempt all questions" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Home;
