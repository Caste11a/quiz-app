import React from 'react';
import { useQuizStore } from '../store/quizStore';
import QuizQuestion from '../components/QuizQuestion';
import AnswerOptions from '../components/AnswerOptions';
import ScoreBoard from '../components/ScoreBoard';

const QuizPage = () => {
  const { questions, currentQuestionIndex } = useQuizStore();

  if (questions.length === 0) {
    return (
      <p className="text-center mt-10">
        カテゴリが未選択です。トップへ戻ってください。
      </p>
    );
  }

  const isFinished = currentQuestionIndex >= questions.length;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {isFinished ? (
        <ScoreBoard />
      ) : (
        <>
          <QuizQuestion />
          <AnswerOptions />
        </>
      )}
    </main>
  );
};

export default QuizPage;
