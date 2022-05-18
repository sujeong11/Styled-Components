import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #ffffff;
  * {
    background-color: #ffffff;
  }
`;

function MailBox() {
  return (
    <Container>
      <form>
        <table>
          <tbody>
            <tr>
              <th>우진운</th>
              <td>
                <ul>
                  <li>dnwlsdns@naver.com</li>
                  <li>wlsdns@dankook.ac.kr</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>과제</th>
              <td>
                <textarea />
              </td>
            </tr>
            <tr>
              <th>질문</th>
              <td>
                <textarea />
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                <textarea />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type='submit'>양식 등록</button>
        </div>
      </form>
    </Container>
  )
}

export default MailBox