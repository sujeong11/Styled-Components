import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Join from './pages/Join/Join';
import WritingPost from './pages/WritingPost/WritingPost';
import SubjectData from './pages/SubjectData/SubjectData';
import SubjectList from './pages/SubjectList/SubjectList';
import BookStore from './pages/BookStore/BookStore';
import Notice from './pages/Notice/Notice';
import TipNotice from './pages/TipNotice/TipNotice';
import AfterLogin from './pages/AfterLogin/AfterLogin';
import MyPage from './pages/MyPage/MyPage';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path = "/login" element={<Login />} />
          <Route path = "/join" element={<Join />} />
          <Route path = "/writingPost" element={<WritingPost />} />
          <Route path = "/subjectData" element={<SubjectData />} />
          <Route path = "/subjectList" element={<SubjectList />} />
          <Route path = "/bookStore" element={<BookStore />} />
          <Route path = "/notice" element={<Notice />} />
          <Route path = "/tipNotice" element={<TipNotice />} />
          <Route path = "/afterLogin" element={<AfterLogin />} />  
          <Route path = "/myPage" element={<MyPage />} />        
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;