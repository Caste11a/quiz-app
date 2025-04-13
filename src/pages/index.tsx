import React from 'react';
import CategorySelector from '../components/CategorySelector';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleSelect = (category: string) => {
    router.push('/quiz');
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <CategorySelector />
    </main>
  );
};

export default Home;
