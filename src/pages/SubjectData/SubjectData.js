import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/Nav/Nav';
import BookInfo from './component/BookInfo';


function SubjectData() {
  return (
    <div>
      <Nav />

      <div>
        <table>
          <tbody>
            <tr>
              <td rowSpan='2'>
                <div>
                  <FontAwesomeIcon icon={faUser} size='4x' />
                </div>
                <span>나연묵 교수님</span>
              </td>
              <td> 
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
              </td>
              <td> 
                <span>DKU@dankook.ac.kr</span>
              </td>
            </tr>
            <tr>
              <td> 
                <FontAwesomeIcon icon={faPhone} size='2x' />
              </td>
              <td> 
                <span>031-80XX-XXXX</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <BookInfo />
    </div>
  )
}

export default SubjectData