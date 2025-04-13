import React from 'react';
import { useQuizStore } from '../store/quizStore';

const QuizQuestion = () => {
  const question = useQuizStore(
    (state) => state.questions[state.currentQuestionIndex]
  );

  return (
    <div>
      <h2 className="text-xl font-semibold">{question.question}</h2>
    </div>
  );
};

export default QuizQuestion;
