import React, { Fragment } from 'react';
import Nav from '../../components/Nav/Nav';
import LectureList from '../../components/LectureList/LectureList';
import styled from 'styled-components';


const H1 = styled.h1`
  color: hotpink;
  font-size: 60px;
  width: 814px;
  margin: 25px auto;
`;

function MyPage() {
  return (
    <div>
      <Nav />
      <H1>MyPage</H1>
      <LectureList title='나의 수강 목록' button='강의 삭제' />
    </div>
  )
}

export default MyPage