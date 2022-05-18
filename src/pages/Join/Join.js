import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';


function Join() {
  return (
    <div>
      <Nav />
      
      <div>
        <h2>회원가입</h2>
        <div>
          <form>
            <input type='email' name='email' placeholder='이메일'></input><br />
            <input type='text' name='name' placeholder='이름'></input><br />
            <input type='email' name='email' placeholder='비밀번호'></input><br />
            <input type='number' name='phone' placeholder='휴대전화 번호'></input>
          </form>
        </div>
        <div>
          <Link to='#'>
            교수님 이신가요?
          </Link>
        </div>
        <div>
          <button type='submit'>회원가입</button>
        </div>
      </div>
    </div>
  )
}

export default Join