import React from 'react';
import Nav from '../../components/Nav/Nav';


function TipNotice() {
  return (
    <div>
      <Nav />

      <div>
        <h1>데이타베이스 설계</h1>
        <div>나연묵 교수님</div>

        <table>
          <tbody>
            <tr>
              <td>
                <div>데이터베이스 설계 기말고사 공지</div>
                <div>시험기간</div>
                <div>2021.12.7</div>
              </td>
              <td>
                <img src='../../../tip.jpg' alt='팁 이미지' />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <div>데이터베이스 설계 기말고사 공지</div>
                <div>시험기간</div>
                <div>2021.12.7</div>
              </td>
              <td>
                <img src='../../../tip.jpg' alt='팁 이미지'
                width='100px'/>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <div>데이터베이스 설계 기말고사 공지</div>
                <div>시험기간</div>
                <div>2021.12.7</div>
              </td>
              <td>
                <img src='../../../tip.jpg' alt='팁 이미지'
                width='100px'/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TipNotice