import { Divider, Table, Typography } from 'antd'
import React from 'react'
import './Footer.scss'

function Footer() {

  return (
      <div className="footer-container" style={{ textAlign: "center" }}>
          <div className="msworld-tag">
              <Typography.Title>MSworld</Typography.Title>
          </div>
          <Divider orientation="left" />
          <div className="about-msworld">
              <table className='footer-table'>
                  <thead>
                      <tr>
                          <th>Company</th>
                          <th>Computer Science</th>
                          <th>Gate</th>
                      </tr>
                  </thead>

                  <tbody>
                      <tr>
                          <td>About us</td>
                          <td>C programming</td>
                          <td>C programming</td>
                      </tr>
                      <tr>
                          <td>Contact us</td>
                          <td>SEPM</td>
                          <td>Operating System</td>
                      </tr>
                      <tr>
                          <td>Terms & Conditions</td>
                          <td>MIS</td>
                          <td>Computer Network</td>
                      </tr>
                      <tr>
                          <td>Privacy Policy</td>
                          <td>Artificial Intelligence</td>
                          <td>Discrit Mathematics</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  );



  
}

export default Footer