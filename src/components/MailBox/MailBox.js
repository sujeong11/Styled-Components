import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';


const Container = styled.div`
  background-color: #ffffff;
  * {
    background-color: #ffffff;
  }
`;

const Form = styled.form`
  width: 420px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  border-spacing: 20px;
`;

const TableTH = styled.table`
  width: 130px;
  height: 70px;
`;

const TableTD = styled.table`
  width: 250px;
  font-size: 18px;
`;

const ProfessorTH = styled(TableTH)`
  font-size: 28px;
  border: 0;
  background-color: ${props => props.theme.lightBlue};
`;

const ProfessorTD = styled(TableTD)`
  ul {
    list-style: none;

    li{
      text-align: center;
    }
  }
`;

const AssignmentTH = styled(TableTH)`
  font-size: 18px;
  vertical-align: top;
`;

const AssignmentTD = styled(TableTD)`
  textarea {
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color1};
    resize: none;
    color: ${props => props.color2}; 
  }
`;

const QuestionTH = styled(TableTH)`
  font-size: 18px;
  vertical-align: top;
`;

const QuestionTD = styled(TableTD)`
  textarea {
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color1};
    resize: none;
    color: ${props => props.color2}; 
  }
`;

const ResultTD = styled(TableTD)`
  textarea {
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.color1};
    resize: none;
    color: ${props => props.color2}; 
  }
`;

const ButtonDiv = styled.div`
  text-align: right;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  background-color: #ffffff;
  cursor: pointer;
`;

function MailBox() {
  return (
    <Container>
      <Form>
        <Table>
          <tbody>
            <tr>
              <ProfessorTH>우진운</ProfessorTH>
              <ProfessorTD>
                <ul>
                  <li>dnwlsdns@naver.com</li>
                  <li>wlsdns@dankook.ac.kr</li>
                </ul>
              </ProfessorTD>
            </tr>
            <tr>
              <AssignmentTH>과제</AssignmentTH>
              <AssignmentTD 
                width="250px" height="70px" color1="#ffffff" color2={theme.mainBlack}
              >
                <textarea />
              </AssignmentTD>
            </tr>
            <tr>
              <QuestionTH>질문</QuestionTH>
              <QuestionTD
                width="250px" height="70px" color1="#ffffff" color2={theme.mainBlack}
              >
                <textarea />
              </QuestionTD>
            </tr>
            <tr>
              <ResultTD colSpan='2' 
                width="400px" height="90px" color1="#f1eeee" color2="#666666"
              >
                <textarea />
              </ResultTD>
            </tr>
          </tbody>
        </Table>
        <ButtonDiv>
          <Button type='submit'>양식 등록</Button>
        </ButtonDiv>
      </Form>
    </Container>
  )
}

export default MailBox