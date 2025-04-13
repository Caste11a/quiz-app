import React from 'react';
import { useQuizStore } from '../store/quizStore';

const ScoreBoard = () => {
  const { score, questions, reset } = useQuizStore();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        スコア: {score} / {questions.length}
      </h2>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={reset}
      >
        もう一度プレイ
      </button>
    </div>
  );
};

export default ScoreBoard;
