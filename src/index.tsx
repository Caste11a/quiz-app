import Layout from './components/Layout';
import CategorySelector from './components/CategorySelector';
import './main.css';

const Home = () => {
  return (
    <Layout>
      <main>
        <CategorySelector />
      </main>
    </Layout>
  );
};

export default Home;
