import React from 'react';
import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import LectureList from '../../components/LectureList/LectureList';


function SubjectList() {
  return (
    <div>
      <Nav />
      <Search />
      <LectureList title='강의 목록' button='강의 정보 조회' />
    </div>
  )
}

export default SubjectList