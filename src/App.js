import MainPage from './Page/MainPage';
import GlobalStyle from './GlobalStyle';
import LoginPage from './Page/LoginPage';
import MembershipPage from './Page/MembershipPage';
import BlogMainSkin1 from './Page/BlogMainSkin1';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} /> 
          <Route path="/login" element = {<LoginPage />} />
          <Route path="login/membership" element = {<MembershipPage />} />
          <Route path="blog" element = {<BlogMainSkin1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;