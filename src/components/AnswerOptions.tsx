import { useQuizStore } from '../store/quizStore';
import { shuffle } from '../utils/shuffle';

// 選択肢を表示する
const AnswerOptions = () => {
  const { currentQuestionIndex, questions, answerQuestion, nextQuestion } =
    useQuizStore();

  const options = shuffle(questions[currentQuestionIndex].options);

  const handleAnswer = (option: string) => {
    answerQuestion(option);
    nextQuestion();
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleAnswer(opt)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default AnswerOptions;
