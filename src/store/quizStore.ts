import { create } from 'zustand';
import questionsData from '../data/questions.json';
import { shuffle } from '../utils/shuffle';

export interface Question {
  category: string;
  question: string;
  options: string[];
  answer: string;
}

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  selectedCategory: string | null;
  selectCategory: (category: string) => void;
  answerQuestion: (selected: string) => void;
  nextQuestion: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  currentQuestionIndex: 0,
  score: 0,
  questions: [],
  selectedCategory: null,

  selectCategory: (category) => {
    const filtered = questionsData.filter((q) => q.category === category);
    const shuffled = shuffle(filtered);
    set({
      selectedCategory: category,
      questions: shuffled,
      currentQuestionIndex: 0,
      score: 0,
    });
  },

  answerQuestion: (selected) => {
    const { questions, currentQuestionIndex, score } = get();
    const isCorrect = questions[currentQuestionIndex].answer === selected;
    set({ score: isCorrect ? score + 1 : score });
  },

  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }));
  },

  reset: () => {
    set({
      currentQuestionIndex: 0,
      score: 0,
      selectedCategory: null,
      questions: [],
    });
  },
}));
