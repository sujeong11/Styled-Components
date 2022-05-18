import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';


const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 60px auto;
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
  text-align: right;
  margin: 5px 0;
  
  a {
    color: ${props => props.theme.darkPurple};
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 40px;
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

function Join() {
  return (
    <Fragment>
      <Nav />
      
      <Container>
        <H2>회원가입</H2>
        <div>
          <form>
            <Input type='email' name='email' placeholder='이메일'></Input><br />
            <Input type='text' name='name' placeholder='이름'></Input><br />
            <Input type='email' name='email' placeholder='비밀번호'></Input><br />
            <Input type='number' name='phone' placeholder='휴대전화 번호'></Input>
          </form>
        </div>
        <LinkDiv>
          <Link to='#'>
            교수님 이신가요?
          </Link>
        </LinkDiv>
        <ButtonDiv>
          <Button type='submit'>회원가입</Button>
        </ButtonDiv>
      </Container>
    </Fragment>
  )
}

export default Join