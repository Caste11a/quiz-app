// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import QuizQuestion from '../components/QuizQuestion';
import AnswerOptions from '../components/AnswerOptions';
import ScoreBoard from '../components/ScoreBoard';
import Layout from '../components/Layout';

const QuizPage = () => {
  const { questions, currentQuestionIndex } = useQuizStore();
  const navigate = useNavigate();

  if (questions.length === 0) {
    return (
      <Layout>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center">カテゴリが未選択です。</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => navigate('/')}
          >
            トップへ戻る
          </button>
        </div>
      </Layout>
    );
  }

  const isFinished = currentQuestionIndex >= questions.length;

  return (
    <Layout>
      <div className="flex flex-col gap-2">
        {isFinished ? (
          <ScoreBoard />
        ) : (
          <>
            <QuizQuestion />
            <AnswerOptions />
          </>
        )}
      </div>
    </Layout>
  );
};

export default QuizPage;
