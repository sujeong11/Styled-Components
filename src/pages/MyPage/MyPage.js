import React from 'react';
import Nav from '../../components/Nav/Nav';
import LectureList from '../../components/LectureList/LectureList';


function MyPage() {
  return (
    <div>
      <Nav />
      <h1>MyPage</h1>
      <LectureList title='나의 수강 목록' button='강의 삭제' />
    </div>
  )
}

export default MyPage