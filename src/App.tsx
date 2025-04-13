// // src/App.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Link to="/about">about</Link>
//       <Link to="/contact">contact</Link>
//     </>
//   );
// }

// export default App;

// src/App.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
