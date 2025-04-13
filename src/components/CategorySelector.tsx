import React from 'react';
import { useQuizStore } from '../store/quizStore';

const CategorySelector = () => {
  const selectCategory = useQuizStore((state) => state.selectCategory);
  const categories = ['JavaScript', 'TypeScript'];

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-bold">カテゴリを選択</h2>
      {categories.map((cat) => (
        <button
          key={cat}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => selectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
