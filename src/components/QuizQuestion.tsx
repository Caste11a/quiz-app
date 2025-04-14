import { useQuizStore } from '../store/quizStore';

const QuizQuestion = () => {
  // 現在の問題番号表示用
  const currentNum = useQuizStore((state) => state.currentQuestionIndex);
  const question = useQuizStore(
    (state) => state.questions[state.currentQuestionIndex]
  );

  return (
    <div>
      <h2 className=" text-xl font-semibold">第{currentNum + 1} 問</h2>
      <h2 className=" text-xl font-semibold">{question.question}</h2>
    </div>
  );
};

export default QuizQuestion;
