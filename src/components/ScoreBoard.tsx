import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';

const ScoreBoard = () => {
  const { score, questions, reset } = useQuizStore();
  const navigate = useNavigate();
  const stateReset = () => {
    reset;
    navigate('/');
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        スコア: {score} / {questions.length}
      </h2>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => stateReset()}
      >
        もう一度プレイ
      </button>
    </div>
  );
};

export default ScoreBoard;
