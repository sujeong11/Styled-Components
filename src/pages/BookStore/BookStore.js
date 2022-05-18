import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Seach from '../../components/Search/Search';


function BookStore() {
  return (
    <div>
      <Nav />
      <Seach />
      
      <div>
        <div>
          <span>중고 서적 게시판</span>
          <Link to='/writingPost'>
            <button>글쓰기</button>
          </Link>
        </div>
        
        <table>
          <tbody>
            <tr>
              <td>
                <img src='../../../subject.jpg' alt='과목 이미지' />
              </td>
              <td>
                <div>데이타 베이스 시스템</div>
                <div>이석호 저자 | 출판사 | 3 개정판</div>
                <div>가격: 10000원</div>
                <div>책상태 : 좋음</div>
                <div>연락방식 : 이메일</div>
              </td>
              <td>
                <div>판매중</div>
                <dl>
                  <dt>판매자의 말</dt>
                  <dd>현재 책 상태는 깔끔합니다. 이메일 연락을 원합니다.</dd>
                </dl>
                <div>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookStore