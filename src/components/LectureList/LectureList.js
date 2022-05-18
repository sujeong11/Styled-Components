import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Fragment } from 'react';
import styled from 'styled-components';


const Table = styled.table`
  margin: 0 auto;
  border-spacing: 5px;
`;

const Caption = styled.caption`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  margin: 5px 0 8px 5px;
`;

const TableHeadTH = styled.th`
  background-color: ${props => props.theme.darkPurple};
  color: #ffffff;
  height: 35px;
  width: ${props => props.width};
`;

const TableBodyTD = styled.td`
  height: 30px;
  font-size: 15px;
  background-color: #ffffff;
`;

const ProfessorTD = styled(TableBodyTD)`
  text-align: center;
`;

const CourseTD = styled(TableBodyTD)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  span {
    background-color: #ffffff;
  }

  a {
    background-color: #ffffff;
    text-decoration: none;
    color: ${props => props.theme.mainBlack};
    border: 1px solid ${props => props.theme.mainBlack};
    border-radius: 10px;
    padding: 0 30px;
    margin-right: 30px;
  }
`;

const Button = styled.button`
  border: 0;
  background-color: #ffffff;
  margin-left: -32px;

  svg {
    background-color: #ffffff;
    color: ${props => props.theme.darkPurple};
    cursor: pointer;
  }
`;

function LectureList({ title, button }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (title === "나의 수강 목록") {
      setShow(true)
    } else if (title === "강의 목록") {
      setShow(false)
    }
  }, [])

  return (
    <Fragment>
      <Table>
        <Caption>{title}</Caption>
        <thead>
          <tr>
            <TableHeadTH width="200px">교수명</TableHeadTH>
            <TableHeadTH width="600px">과목</TableHeadTH>
          </tr>
        </thead>
        <tbody>
          {/* Map으로 변경하기 */}
          <tr>
            <ProfessorTD>우진운</ProfessorTD>
            <CourseTD>
              <span>알고리즘</span>
              <Link to='#'>
                {button}
              </Link>
            </CourseTD>
            {show ?
              <td>
                <Button>
                  <FontAwesomeIcon icon={faEnvelope} size='lg' />
                </Button>
              </td>
              : null
            }
          </tr>
          <tr>
            <ProfessorTD>우진운</ProfessorTD>
            <CourseTD>
              <span>알고리즘</span>
              <Link to='#'>
                {button}
              </Link>
            </CourseTD>
            {show ?
              <td>
                <Button>
                  <FontAwesomeIcon icon={faEnvelope} size='lg' />
                </Button>
              </td>
              : null
            }
          </tr>
          <tr>
            <ProfessorTD>우진운</ProfessorTD>
            <CourseTD>
              <span>알고리즘</span>
              <Link to='#'>
                {button}
              </Link>
            </CourseTD>
            {show ?
              <td>
                <Button>
                  <FontAwesomeIcon icon={faEnvelope} size='lg' />
                </Button>
              </td>  
              : null
            }
          </tr>
        </tbody>
      </Table>
    </Fragment>
  )
}

export default LectureList