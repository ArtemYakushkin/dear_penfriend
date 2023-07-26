import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import MyPostsPage from './pages/MyPostsPage/MyPostsPage';
import DetailsPostPage from './pages/DetailsPostPage/DetailsPostPage';
import AddPostPage from './pages/AddPostPage/AddPostPage';
import EditPostPage from './pages/EditPostPage/EditPostPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PopularPostsPage from './pages/PopularPostsPage/PopularPostsPage';
import UserInfoPage from './pages/UserInfoPage/UserInfoPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import About from './pages/About/About';
import { useEffect } from 'react';
import { getMe } from './redux/features/auth/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='posts' element={<MyPostsPage />} />
        <Route path=':id' element={<DetailsPostPage />} />
        <Route path='new' element={<AddPostPage />} />
        <Route path=':id/edit' element={<EditPostPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='popular' element={<PopularPostsPage />} />
        <Route path='user/:id' element={<UserInfoPage />} />
        <Route path='settings/:id' element={<SettingsPage />} />
        <Route path='about' element={<About />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Layout>
  );
}

export default App;
