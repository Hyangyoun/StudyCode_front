import MainPage from './Page/MainPage';
import GlobalStyle from './GlobalStyle';
import LoginPage from './Page/LoginPage';
import MembershipPage from './Page/MembershipPage';
import BlogPage from './Page/BlogPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} /> 
          <Route path="/login" element = {<LoginPage />} />
          <Route path="login/membership" element = {<MembershipPage />} />
          <Route path="blog" element = {<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;