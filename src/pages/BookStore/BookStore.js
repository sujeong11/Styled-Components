import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Seach from '../../components/Search/Search';
import styled from 'styled-components';


const Title = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: bold;
  }

  button {
    padding: 2px 10px;
    border: 2px solid ${props => props.theme.mainBlack};
    font-size: 16px;
    cursor: pointer;
  }
`;

const Table = styled.table`
  width: 1000px;
  border: 2px solid ${props => props.theme.mainBlack};
  background-color: #ffffff;
  margin: 20px auto;

  * {
    background-color: #ffffff;
  }
`;

const TableBody = styled.tbody`
  border: 2px solid ${props => props.theme.mainBlack};
`;

const ImgTD = styled.td`
  width: 150px;
      
  img {
    width: 130px;
    height: 170px;
  }
`;

const DetailTD = styled.td`
  width: 320px;

  div {
    padding: 5px 0px;
    font-weight: bold;
  }
`;

const SellerTD = styled.td`
  dl {
    dt {
      font-weight: bold;
      margin-bottom: 5px;
    }

    dd {
      margin-bottom: 40px;
    }
  }
`;

const StateDiv = styled.div`
  text-align: right;
  color: blue;
  margin: 0px 20px 10px 0;
`;

const ButtonDiv = styled.div`
  text-align: right;
  width: 525px;
`;

const Button = styled.button`
  padding: 7px 10px;
  margin-right: 15px;
  cursor: pointer;
`;

function BookStore() {
  return (
    <Fragment>
      <Nav />
      <Seach />
      
      <Fragment>
        <Title>
          <span>중고 서적 게시판</span>
          <Link to='/writingPost'>
            <button>글쓰기</button>
          </Link>
        </Title>
        
        <Table>
          <TableBody>
            <tr>
              <ImgTD>
                <img src='../../../subject.jpg' alt='과목 이미지' />
              </ImgTD>
              <DetailTD>
                <div>데이타 베이스 시스템</div>
                <div>이석호 저자 | 출판사 | 3 개정판</div>
                <div>가격: 10000원</div>
                <div>책상태 : 좋음</div>
                <div>연락방식 : 이메일</div>
              </DetailTD>
              <SellerTD>
                <StateDiv>판매중</StateDiv>
                <dl>
                  <dt>판매자의 말</dt>
                  <dd>현재 책 상태는 깔끔합니다. 이메일 연락을 원합니다.</dd>
                </dl>
                <ButtonDiv>
                  <Button>수정</Button>
                  <Button>삭제</Button>
                </ButtonDiv>
              </SellerTD>
            </tr>
          </TableBody>
        </Table>
      </Fragment>
    </Fragment>
  )
}

export default BookStore