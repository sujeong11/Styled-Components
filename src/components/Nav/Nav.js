import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Nav_ = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px;
  border-bottom: 1px solid ${props => props.theme.mainBlack};
  box-shadow: 0px 0px 5px 0px #bdb8b8;
  background-color: #ffffff;

  * {
    background-color: #ffffff;
  }

  svg {
    margin: 0 20px;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  width: 800px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;

  a {
    color: ${props => props.theme.mainBlack};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border: 0;
  font-size: 15px;
  width: 90px;
  height: 35px;
  cursor: pointer;
`;

const JoinButton = styled(Button)`
  background-color: ${props => props.theme.darkPurple};
  color: #ffffff;
  border-radius: 15px;
  margin-right: 30px;
`;

const ImgDiv = styled.div`
  margin: 7px 20px 3px 0px;
  width: 155px;
  text-align: right;
`;

function Nav() {
  return (
    <Nav_>
      <FontAwesomeIcon icon={faGlobe} size='3x' />
      <Ul>
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
      </Ul>
      {/* 로그인시 변환 */}
      {true ? 
        <LoginDiv>
          <Link to='/login'>
            <Button>로그인</Button>
          </Link>
          <Link to='/join'>
            <JoinButton>회원가입</JoinButton>
          </Link>
        </LoginDiv> : 
        <ImgDiv>
          <FontAwesomeIcon icon={faCircleUser} size='2x' />
        </ImgDiv>
      }
    </Nav_>
  )
}

export default Nav