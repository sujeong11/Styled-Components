import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';


const Title = styled.div`
  text-align: center;
  margin: 35px 0;
  font-size: 22px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 1000px;
  height: 400px;
  margin: 0 auto;
  border: 5px solid ${props => props.theme.lightBlue};
  background-color: #ffffff;
  padding: 20px 40px 20px 40px;
  border-radius: 20px;

  * {
    background-color: #ffffff;
  }

  svg {
    margin-left: -15px;
    color: #999999;
  }
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.mainBlack};
  width: 439px;
  height: 20px;
  margin-bottom: 18px;
  padding: 0 0 10px 10px;

  &::placeholder {
    font-size: 15px;
  } 
`;

const Textarea = styled.textarea`
  width: 900px;
  height: 190px;
  font-size: 15px;
  border-radius: 10px;
  padding: 10px 15px;
  resize:none;
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #bfaefc;
  color: #ffffff;
  border-radius: 10px;
  border: 0;
  font-size: 18px;
  font-weight: bold;
  width: 220px;
  height: 35px;
  cursor: pointer;
`;

function WritingPost() {
  return (
    <Fragment>
      <Nav />
      
      <Fragment>
        <Title>판매글 작성하기</Title>
        <form>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Input type='text' placeholder='도서명' />
                </td>
                <td>
                  <Input type='text' placeholder='저자명' />
                </td>
              </tr>
              <tr>
                <td>
                  <Input type='text' placeholder='출판사' />
                </td>
                <td>
                  <Input type='text' placeholder='책상태' />
                  <FontAwesomeIcon icon={faAngleRight} />
                </td>
              </tr>
              <tr>
                <td>
                  <Input type='text' placeholder='₩ 가격' />
                </td>
                <td>
                  <Input type='text' placeholder='연락 방식' />
                  <FontAwesomeIcon icon={faAngleRight} />
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <Textarea placeholder='판매자의 말' />
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
        <ButtonDiv>
          <Button type='submit'>작 성 하 기</Button>
        </ButtonDiv>
      </Fragment>
    </Fragment>
  )
}

export default WritingPost