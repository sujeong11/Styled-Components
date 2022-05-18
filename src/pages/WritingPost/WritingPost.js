import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/Nav/Nav';


function WritingPost() {
  return (
    <div>
      <Nav />
      
      <div>
        <div>판매글 작성하기</div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <input type='text' placeholder='도서명' />
                </td>
                <td>
                  <input type='text' placeholder='저자명' />
                </td>
              </tr>
              <tr>
                <td>
                  <input type='text' placeholder='출판사' />
                </td>
                <td>
                  <input type='text' placeholder='책상태' />
                  <FontAwesomeIcon icon={faAngleRight} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type='text' placeholder='₩ 가격' />
                </td>
                <td>
                  <input type='text' placeholder='연락 방식' />
                  <FontAwesomeIcon icon={faAngleRight} />
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <textarea placeholder='판매자의 말' />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div>
          <button type='submit'>작 성 하 기</button>
        </div>
      </div>
    </div>
  )
}

export default WritingPost