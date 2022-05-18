import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';


function Login() {
  return (
    <div>
      <Nav />
      
      <div>
        <h2>로그인</h2>
        <div>
          <form>
            <input type='email' name='email' placeholder='이메일'></input><br />
            <input type='password' name='password' placeholder='비밀번호'></input>
          </form>
        </div>
        <div>
          <Link to='#'>
            아이디 찾기
          </Link>
          <Link to='#'>
            비밀번호 찾기
          </Link>
          <Link to='/join'>
            회원가입
          </Link>
        </div>
        <div>
          <button type='submit'>로그인</button>
        </div>
      </div>
    </div>
  )
}

export default Login