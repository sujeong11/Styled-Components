import React from 'react';
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
  margin-bottom: 15px;
`;

const NoticeDiv = styled.div`
  width: 780px;
  font-size: 30px;
  color: blue;
  overflow: auto;
  cursor: pointer;
`;

const PeriodDiv = styled.div`
  width: 780px;
  font-size: 20px;
  color: #999999;
  overflow: auto;
`;

const DateDiv = styled.div`
  width: 780px;
  font-size: 20px;
  color: #b8b7b7;
  overflow: auto;
`;

const ImgTD = styled.td`
  width: 100px;
        
  img {
    width: 100px;
    margin: 5px 5px;
  }
`;

function TipNotice() {
  return (
    <div>
      <Nav />

      <div>
        <h1>데이타베이스 설계</h1>
        <div>나연묵 교수님</div>

        <table>
          <tbody>
            <tr>
              <td>
                <div>데이터베이스 설계 기말고사 공지</div>
                <div>시험기간</div>
                <div>2021.12.7</div>
              </td>
              <td>
                <img src='../../../tip.jpg' alt='팁 이미지' />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <div>데이터베이스 설계 기말고사 공지</div>
                <div>시험기간</div>
                <div>2021.12.7</div>
              </td>
              <td>
                <img src='../../../tip.jpg' alt='팁 이미지'
                width='100px'/>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <div>데이터베이스 설계 기말고사 공지</div>
                <div>시험기간</div>
                <div>2021.12.7</div>
              </td>
              <td>
                <img src='../../../tip.jpg' alt='팁 이미지'
                width='100px'/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TipNotice