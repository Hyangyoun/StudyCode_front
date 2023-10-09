import MainPage from './Page/MainPage';
import GlobalStyle from './GlobalStyle';
import LoginPage from './Page/LoginPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} /> 
          <Route path='/Login' element = {<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;