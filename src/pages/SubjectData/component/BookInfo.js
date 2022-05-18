import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  
  span {
    font-size: 22px;
  }

  button {
    background-color: #ffffff;
    border: 2px solid ${props => props.theme.mainBlack};
    width: 200px;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const Table = styled.table`
  margin: 0 auto;
  border-spacing: 5px 12px;
`;

const ImgTD = styled.td`
  width: 220px;

  img {
    margin-top: 12px;
    width: 180px;
    height: 210px;
  }
`;

const TitleTD = styled.td`
  width: 190px;
  height: 35px;
  background-color: ${props => props.theme.lightBlue};
  text-align: center;
  color: #ffffff;
  font-size: 18px;
`;

const InfoTR = styled.tr`
  margin: 10px 0;
`;

const InfoTD = styled.td`
  height: 100px;
  border: 1px solid ${props => props.theme.lightBlue};
  text-align: center;
  font-size: 18px;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  font-size: 16px;
  background-color: #ffffff;
  border: 2px solid ${props => props.theme.mainBlack};
  cursor: pointer;
`;

function BookInfo() {
  return (
    <Fragment>
      <Title>
        <span>강의 교재 정보</span>
        <button>강의 추가</button>
      </Title>
      <Table>
        <tbody>
          <tr>
            <ImgTD rowSpan='4'>
              <img src='../../../../writer.jpg' alt='책의 저자 사진' />
            </ImgTD>
          </tr>
          <tr>
            <TitleTD>교재명</TitleTD>
            <TitleTD>저자</TitleTD>
            <TitleTD>개판 정보</TitleTD>
            <TitleTD>가격</TitleTD>
          </tr>
          <InfoTR>
            <InfoTD>데이타베이스 설계</InfoTD>
            <InfoTD>가나다 지필</InfoTD>
            <InfoTD>2021년 3 Edition</InfoTD>
            <InfoTD>30000</InfoTD>
          </InfoTR>
          <tr>
            <td colSpan='2'>
              <Link to='/bookStore'>
                <Button>중고 서적 게시판</Button>
              </Link>
            </td>
            <td colSpan='2'>
              <Link to='/tipNotice'>
                <Button>강의 팁 게시판</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  )
}

export default BookInfo