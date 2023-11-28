import MainPage from './Page/MainPage';
import GlobalStyle from './GlobalStyle';
import LoginPage from './Page/LoginPage';
import MembershipPage from './Page/MembershipPage';
import BlogPage from './Page/BlogPage';
import BlogConfig from './Blog/BlogConfig';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import PostWrite from './Blog/PostWrite';
import PostViewer from './Blog/PostViewer';
import CartegoryPost from './Blog/BlogItem/CartegoryPost';
import BlogHeader from './Main/BlogHeader';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="login/membership" element = {<MembershipPage />} />
          <Route path="blog/:nickName/:category" element = {<BlogPage />} />
          <Route path="blog/:nickName/:category/:categoryName" element = {<BlogPage />} />
          <Route path="blog/:nickName/config" element = {<BlogConfig />} />
          <Route path="blog/:nickName/blogWrite" element = {<PostWrite />} />
          <Route path="blog/BlogViewer" element = {<PostViewer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;