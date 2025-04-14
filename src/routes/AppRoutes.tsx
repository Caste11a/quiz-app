import { Routes, Route } from 'react-router-dom';
import Index from '../index';
import Quiz from '../pages/quiz';
import About from '../pages/about';
import Contact from '../pages/contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default AppRoutes;
