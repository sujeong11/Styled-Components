import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Table = styled.table`
  margin: 0 auto;
  border-spacing: 5px;
`

const Caption

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
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>교수명</th>
            <th>과목</th>
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