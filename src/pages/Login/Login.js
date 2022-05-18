import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  height: 400px;
  margin: 110px auto;
  border-radius: 10%;
  box-shadow: 0 15px 15px 0 gray;
  padding: 45px 30px;
  background-color: #ffffff;

  * {
    background-color: #ffffff;
  }
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 439px;
  padding: 10px 10px;
  margin-top: 20px;
  border-radius: 8px;
`;

const LinkDiv = styled.div`
  margin: 15px 0;
  text-align: center;

  a {
    color: ${props => props.theme.mainBlack};
    text-decoration: none;
    font-size: 12px;

    &:after {
      content: '|';
      padding: 0 10px;
    }
    &:last-child::after {
      content: '';
    }
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  border-radius: 20px;
  background-color: ${props => props.theme.darkPurple};
  border: 0;
  color: #ffffff;
  cursor: pointer;
`;

function Login() {
  return (
    <Fragment>
      <Nav />
      
      <Container>
        <H2>로그인</H2>
        <div>
          <form>
            <Input type='email' name='email' placeholder='이메일'></Input><br />
            <Input type='password' name='password' placeholder='비밀번호'></Input>
          </form>
        </div>
        <LinkDiv>
          <Link to='#'>
            아이디 찾기
          </Link>
          <Link to='#'>
            비밀번호 찾기
          </Link>
          <Link to='/join'>
            회원가입
          </Link>
        </LinkDiv>
        <ButtonDiv>
          <Button type='submit'>로그인</Button>
        </ButtonDiv>
      </Container>
    </Fragment>
  )
}

export default Login