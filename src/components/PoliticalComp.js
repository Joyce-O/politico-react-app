import React from 'react';
// import Login from '../containers/Login';
import Footer from './Footer';

const PoliticalComp = () => (
  <div className="containerl">
    <header className="head-login">
      <div>
        <ul>
          <li id="head-text">
            <a href="/" dangerouslySetInnerHTML={{ __html: '&Popf;&oopf;&lopf;&iopf;&topf;&iopf;&copf;O' }} />
          </li>
        </ul>
      </div>
      <div>
        <ul className="head-login-ul">
          <li>
            <div className="dropdown" style={{ float: 'right' }}>
              <span id="avatarName">
                <img id="avatar" src="https://res.cloudinary.com/politic/image/upload/c_scale,w_30/v1559126987/images.png" alt="profile" width="20px" />
              </span>

              <div className="dropdown-content">

                <a href="/">Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <section className="home-section-admin-a">
      <div id="flex-admin">
        <aside className="admin-menu">
          <div className="bg-blue" id="menu">
            <ul className="ul-list">
              <li id="welcome-admin">ADMIN</li>
              <li>
                <a href="/admin">
                  <span className="menu-ico menu-ico-d">&#9916;</span>
Dashboard

                </a>
              </li>
              <li>
                <a href="/political">
                  <span className="menu-ico menu-ico-d">&#x2302;</span>
Political Offices

                </a>
              </li>
              <li>
                <a href="/party">
                  <span className="menu-ico menu-ico-d">&#43;</span>
New Party

                </a>
              </li>
              <li>
                <a href="/office">
                  <span className="menu-ico menu-ico-d">&#43;</span>
New Office

                </a>
              </li>
              <li>
                <a href="/admin">
                  <span className="menu-ico menu-ico-d">&#9854;</span>
Petitions

                </a>


              </li>
            </ul>
          </div>
        </aside>
        <section className="main-admin">
          <div className="dash-cont">
            <div id="table-info">
              <p>Political Offices</p>
            </div>
            <div id="table-cont">
              <table>
                <tbody>
                  <tr id="table-head">
                    <th>Type</th>
                    <th>Name</th>
                    <th>Candidates</th>
                    <th>Details</th>
                  </tr>
                  <tr>
                    <td>Federal</td>
                    <td>President</td>
                    <td>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>Senate</td>
                    <td>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>National Assembly</td>
                    <td>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>President</td>
                    <td>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>President</td>
                    <td>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>President</td>
                    <td>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>National Assembly</td>
                    <td>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                  <tr>

                    <td>Federal</td>
                    <td>National Assembly</td>
                    <td>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                      <span className="menu-ico menu-ico-1">&#9873;</span>
                      <span className="menu-ico menu-ico-3">&#9873;</span>
                      <span className="menu-ico menu-ico-4">&#9873;</span>
                      <span className="menu-ico menu-ico-6">&#9873;</span>
                      <span className="menu-ico menu-ico-5">&#9873;</span>
                    </td>
                    <td>
                      <a href="/politicalDetails" className="menu-ico-2">&hellip;</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

    </section>
    <Footer />
  </div>
);

export default PoliticalComp;
