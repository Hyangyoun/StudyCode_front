import MainPage from './Page/MainPage';
import GlobalStyle from './GlobalStyle';
import LoginPage from './Page/LoginPage';
import MembershipPage from './Page/MembershipPage';
import BlogPage from './Page/BlogPage';
import BlogConfig from './Blog/BlogConfig';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import BlogWrite from './Blog/BlogWrite';
import BlogViewer from './Blog/BlogViewer';

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
          <Route path="blog/config" element = {<BlogConfig />} />
          <Route path="blogWrite" element = {<BlogWrite />} />
          <Route path="blog/BlogViewer" element = {<BlogViewer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;