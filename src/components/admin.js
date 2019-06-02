import React from 'react';
// import Login from '../containers/Login';
import Footer from './Footer';

const adminComp = () => (
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
              <li id="welcome-admin">Admin</li>
              <li>
                <a href="admin_dashboard.html">
                  <span className="menu-ico menu-ico-d">&#9916;</span>
Dashboard

                </a>
              </li>
              <li>
                <a href="political_offices.html">
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
                <a href="petition.html">
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
              <a href="#">Parties</a>
            </div>
            <div id="table-cont">
              <table>
                <tr id="table-head">
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Headquarters</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-1">&#9873;</span>
                  </td>
                  <td>Peoples Lifting Party</td>
                  <td>No. 30 Asokoro Street Ikeja Lagos</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>
                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-1">&#9873;</span>
                  </td>
                  <td>Success for all Party</td>
                  <td>No. 30 Asokoro Street Ikeja Lagos</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-6">&#9873;</span>
                  </td>
                  <td>People Alliance Party</td>
                  <td>No. 4 Bimpe Road Benin</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-3">&#9873;</span>
                  </td>
                  <td>Progressive Party</td>
                  <td>Office Suit GRA Ikeja Lagos</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-4">&#9873;</span>
                  </td>
                  <td>Unoin Deliver Party</td>
                  <td>St. John Street V/Island Lagos</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-5">&#9873;</span>
                  </td>
                  <td>All Success Movement</td>
                  <td>No. 1 Asa street, Abuja</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-6">&#127937;</span>
                  </td>
                  <td>Power for Development Party</td>
                  <td>New Seceteraite New Benin</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-5">&#9873;</span>
                  </td>
                  <td>Alliance Party Nigeria</td>
                  <td>No. 1 Asa street, Abuja</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
                <tr>

                  <td className="logo-line left-pad">
                    <span className="menu-ico menu-ico-6">&#127937;</span>
                  </td>
                  <td>Peoples Central Party</td>
                  <td>New Seceteraite New Benin</td>
                  <td className="logo-line2">
                    <a href="party_details.html" className="menu-ico-2">&hellip;</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </div>
    </section>
    <Footer />
  </div>
);

export default adminComp;
