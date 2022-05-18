import React, { Fragment } from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';


const Container = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  margin: 30px 0 20px 0;
`;

const ProfessorDiv = styled.div`
  text-align: right;
  margin-bottom: 40px;
`;

const ContentDiv = styled.div`
  border: 1px solid ${props => props.theme.mainBlack};
  padding: 18px 15px;
`;

const Title = styled.div`
  color: blue;
  font-size: 25px;
`;

const Detail = styled.div`
  font-size: 25px;
`;

function Notice() {
  return (
    <Fragment>
      <Nav />

      <Container>
        <H1>데이타베이스 설계</H1>
        <ProfessorDiv>나연묵 교수님</ProfessorDiv>
        <ContentDiv>
          <Title>기말고사 시간(2021.12.7. 오전 9:10-10:10) 및 시험 방법(온라인)</Title>
          <Detail>
            시험시간: 2021.12.7(화)<br />
            9:00-9:10 이메일 문제 수신<br />
            9:00-9:10 답안 작성<br />
            9:00-9:10 결과 스캔 또는 촬영 발송<br />
          </Detail>
        </ContentDiv>
      </Container>
    </Fragment>
  )
}

export default Notice