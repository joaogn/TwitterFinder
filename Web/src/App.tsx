import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};

export default App;
