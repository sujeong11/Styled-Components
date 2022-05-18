import React from 'react';
import { Link } from 'react-router-dom';


function BookInfo() {
  return (
    <div>
      <div>
        <span>강의 교재 정보</span>
        <button>강의 추가</button>
      </div>
      <table>
        <tbody>
          <tr>
            <td rowSpan='4'>
              <img src='../../../../writer.jpg' alt='책의 저자 사진' />
            </td>
          </tr>
          <tr>
            <td>교재명</td>
            <td>저자</td>
            <td>개판 정보</td>
            <td>가격</td>
          </tr>
          <tr>
            <td>데이타베이스 설계</td>
            <td>가나다 지필</td>
            <td>2021년 3 Edition</td>
            <td>30000</td>
          </tr>
          <tr>
            <td colSpan='2'>
              <Link to='/bookStore'>
                <button>중고 서적 게시판</button>
              </Link>
            </td>
            <td colSpan='2'>
              <Link to='/tipNotice'>
                <button>강의 팁 게시판</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BookInfo