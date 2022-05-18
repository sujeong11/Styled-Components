import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
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

const TableHead_TH = styled.th`
  background-color: $dark-purple;
  color: #ffffff;
  height: 35px;
  width: ${props => props.width};
`;

const TableBody_TD = styled.td`
  height: 30px;
  font-size: 15px;
  background-color: #ffffff;
`;

const TableBody_TD_Professor = styled.td`
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
    <div>
      <Table>
        <Caption>{title}</Caption>
        <thead>
          <tr>
            <TableHead_TH width="200px">교수명</TableHead_TH>
            <TableHead_TH width="600px">과목</TableHead_TH>
          </tr>
        </thead>
        <tbody>
          {/* Map으로 변경하기 */}
          <tr>
            <td>우진운</td>
            <td>
              <span>알고리즘</span>
              <Link to='#'>
                {button}
              </Link>
            </td>
            {show ?
              <td>
                <button>
                  <FontAwesomeIcon icon={faEnvelope} size='lg' />
                </button>
              </td>
              : null
            }
          </tr>
          <tr>
            <td>우진운</td>
            <td>
              <span>알고리즘</span>
              <Link to='#'>
                {button}
              </Link>
            </td>
            {show ?
              <td>
                <button>
                  <FontAwesomeIcon icon={faEnvelope} size='lg' />
                </button>
              </td>
              : null
            }
          </tr>
          <tr>
            <td>우진운</td>
            <td>
              <span>알고리즘</span>
              <Link to='#'>
                {button}
              </Link>
            </td>
            {show ?
              <td>
                <button>
                  <FontAwesomeIcon icon={faEnvelope} size='lg' />
                </button>
              </td>  
              : null
            }
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default LectureList