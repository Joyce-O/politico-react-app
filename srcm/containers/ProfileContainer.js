import React from 'react';

const ProfileContainer = () => (
  <section className="home-section-profile">
    <div id="flex-admin" className="flex-profile">
      <aside className="admin-menu">
        <div className="bg-blue" id="menu">
          <ul className="ul-list ul-list-profile">
            <li id="welcome-admin">User Juliet</li>
            <li>
              <img src="https://res.cloudinary.com/politic/image/upload/c_scale,w_30/v1559126987/images.png" alt="profile" />
              <a href="/profile">
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="/candidates">
                <span className="menu-ico menu-ico-d">&#x2302;</span>
Political Office

              </a>
            </li>
            <li>
              <img src="https://res.cloudinary.com/politic/image/upload/c_scale,w_40/v1551263970/zvv4h2wlocdra2ld1djb.png" alt="vote icon" />
              <a href="/vote">
                <span>Vote</span>
              </a>
            </li>
            <li>
              <img src="https://res.cloudinary.com/politic/image/upload/c_fit,w_30/v1559180930/result.jpg" alt="result icon" />
              <a href="/result">
                <span>Results</span>
              </a>
            </li>
            <li>
              <img src="https://res.cloudinary.com/politic/image/upload/v1558961423/mail-icon.svg" alt="home icon" />
              <a href="/candidate">
                <span>Apply for Office</span>
              </a>
            </li>
            <li>
              <a href="/parties">
                <span className="menu-ico menu-ico-d">&#9245;</span>
Parties

              </a>
            </li>

          </ul>
        </div>
      </aside>
      <section className="main-profile">
        <div className="dash-cont-user">
          <div id="user-descs">
            <div>
              <div className="text-center">
                <img src="https://res.cloudinary.com/politic/image/upload/v1559126987/images.png" alt="profile" />
                <h5 className="bold">
Location:
                  <span>Lagos State</span>
                </h5>
              </div>
              <div className="user-details">
                <h4>User Details</h4>
                <p>
                  <span className="bold">Name: </span>
                  {' '}
Juliet Juliana

                </p>
                <p>
                  <span className="bold">Email: </span>
                  {' '}
juljul@gmail.com
                </p>
                <p>
                  <span className="bold">Phone number: </span>
+2348138802833

                </p>
                <p>
                  <span className="bold">Location: </span>
                  {' '}
GRA Lagos State

                </p>
              </div>
            </div>
            <div id="user-activity">
              <h4>Activity History</h4>
              <table id="user-table">
                <tbody>
                  <tr id="table-head-user">
                    <th>Party</th>
                    <th>Candidate</th>
                    <th>Office</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td className="left-pad">
                      <span className="menu-ico menu-ico-1">&#9873; PCP</span>
                    </td>
                    <td>Mulan Jilbert</td>
                    <td>President</td>
                    <td className="status">
&#10007;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-pad">
                      <span className="menu-ico menu-ico-1">&#9873; PCP</span>
                    </td>
                    <td>Yusuf Omalide</td>
                    <td>Senate</td>
                    <td className="status">
&#10004;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-pad">
                      <span className="menu-ico menu-ico-1">&#9873; PCP</span>
                    </td>
                    <td>Gilbert Olaleya</td>
                    <td>House of Rep.</td>
                    <td className="status">
&#10004;
                    </td>
                  </tr>
                  <tr>
                    <td className="left-pad">
                      <span className="menu-ico menu-ico-1">&#9873; PCP</span>
                    </td>
                    <td>Janet Lucky</td>
                    <td>Governorship</td>
                    <td className="status">
&#10004;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default ProfileContainer;
