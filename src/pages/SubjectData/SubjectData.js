import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/Nav/Nav';
import BookInfo from './component/BookInfo';
import styled from 'styled-components';


const Container = styled.div`
  margin: 65px 0;
`;

const Table = styled.table`
  border: 3px solid ${props => props.theme.mainBlack};
  width: 1000px;
  margin: 0 auto;
  padding: 20px 50px;
  background-color: #ffffff;

  * {
    background-color: #ffffff;
  }
`;

const NameTD = styled.td`
  width: 150px;
  text-align: center;

  svg{
    margin-bottom: 20px;
  }

  span {
    font-size: 22px;
  }
`;

const EmailIconTD = styled.td`
  width: 200px;
  text-align: center;

  svg {
    color: ${props => props.theme.lightBlue};
  }
`;

const EmailInfoTD = styled.td`
  width: 200px;
  text-align: center;
  font-size: 18px;
`;

const PhoneIconTD = styled.td`
  text-align: center;
`;

const PhoneInfoTD = styled.td`
  text-align: center;
  font-size: 18px;
`;

function SubjectData() {
  return (
    <Fragment>
      <Nav />

      <Container>
        <Table>
          <tbody>
            <tr>
              <NameTD rowSpan='2'>
                <div>
                  <FontAwesomeIcon icon={faUser} size='4x' />
                </div>
                <span>나연묵 교수님</span>
              </NameTD>
              <EmailIconTD> 
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
              </EmailIconTD>
              <EmailInfoTD> 
                <span>DKU@dankook.ac.kr</span>
              </EmailInfoTD>
            </tr>
            <tr>
              <PhoneIconTD> 
                <FontAwesomeIcon icon={faPhone} size='2x' />
              </PhoneIconTD>
              <PhoneInfoTD> 
                <span>031-80XX-XXXX</span>
              </PhoneInfoTD>
            </tr>
          </tbody>
        </Table>
      </Container>
      
      <BookInfo />
    </Fragment>
  )
}

export default SubjectData