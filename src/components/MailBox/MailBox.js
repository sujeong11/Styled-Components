import React from 'react';


function MailBox() {
  return (
    <div>
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
    </div>
  )
}

export default MailBox