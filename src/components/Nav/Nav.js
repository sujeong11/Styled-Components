import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGlobe } from '@fortawesome/free-solid-svg-icons';


function Nav() {
  return (
    <nav>
      <FontAwesomeIcon icon={faGlobe} size='3x' />
      <ul>
        <li>
          <Link to='#'>
            홈
          </Link>
        </li>
        <li>
          <Link to='/bookStore'>
            중고서적
          </Link>
        </li>
        <li>
          <Link to='/subjectList'>
            강의목록
          </Link>
        </li>
        <li>
          <Link to='/myPage'>
            마이페이지
          </Link>
        </li>
      </ul>
      {/* 로그인시 변환 */}
      {true ? 
        <div>
          <Link to='/login'>
            <button>로그인</button>
          </Link>
          <Link to='/join'>
            <button>회원가입</button>
          </Link>
        </div> : 
        <div>
          <FontAwesomeIcon icon={faCircleUser} size='2x' />
        </div>
      }
    </nav>
  )
}

export default Nav