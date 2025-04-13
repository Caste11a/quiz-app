// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import AppRoutes from './routes/AppRoutes';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {' '}
//       {/*ラップ！！*/}
//       <AppRoutes />
//       {/*Routes.tsxのdefault export*/}
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from 'react';
// import CategorySelector from '../components/CategorySelector';
// import { useRouter } from 'next/router';

// const Home = () => {
//   const router = useRouter();

//   const handleSelect = (category: string) => {
//     router.push('/quiz');
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center">
//       <CategorySelector />
//     </main>
//   );
// };

// export default Home;

// src/pages/index.tsx
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">
        技術用語クイズアプリへようこそ！
      </h1>
      <Link
        to="/quiz"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        クイズを始める
      </Link>
    </div>
  );
};

export default HomePage;
