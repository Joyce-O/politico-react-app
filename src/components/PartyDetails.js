import React from 'react';
// import Login from '../containers/Login';
const PartyDetails = () => (
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

    <section className="home-section-details">
      <div id="flex-admin">
        <aside className="admin-menu">
          <div className="bg-blue" id="menu">
            <ul className="ul-list">
              <li id="welcome-admin">Admin</li>
              <li>
                <a href="/admin">
                  <span className="menu-ico menu-ico-d">&#9916;</span>
Dashboard

                </a>
              </li>
              <li>
                <a href="/political">
                  <span className="menu-ico menu-ico-d">&#43;</span>
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
          <div className="dash-cont main-admin-pd">
            <div id="table-info">
              <a href="/partyDetails#">Party Details</a>
            </div>
            <div className="party-div party-details-div">

              <div id="flag-div">
                <p className="party-initial">
People Alliance Party
                  <span>...for now and the future!</span>
                </p>
                <img id="flag" src="https://res.cloudinary.com/politic/image/upload/v1551272531/jbsrvbjf3cyms14wks9c.png" alt="profile name" width="20px" />
                <div id="details-hq">
                  <span htmlFor="Chai">
                    <b>Headquarters</b>
                  </span>
                  <p>No. 4 Bimpe Road Benin City, Edo State.</p>
                </div>
              </div>
              <div className="party-list">
                <div className="margin-divide">
                  <ul>
                    <li className="margin-bottom bold">
                                Candidate
                    </li>
                    <li className="margin-bottom">Juliana Gokan</li>
                    <li className="margin-bottom">Stephen Gilbert</li>
                    <li className="margin-bottom">Yusuf Omalide</li>
                    <li className="margin-bottom">Benjamin Sunday</li>
                    <li className="margin-bottom">Maria Hogiya</li>
                    <li className="margin-bottom">Keneth Duru</li>
                  </ul>
                </div>
                <div className="margin-divide">
                  <ul>
                    <li className="margin-bottom bold">
                                State
                    </li>
                    <li className="margin-bottom">Delta State</li>
                    <li className="margin-bottom">Edo State</li>
                    <li className="margin-bottom">Enugu State</li>
                    <li className="margin-bottom">
                                State
                    </li>
                    <li className="margin-bottom">Delta State</li>
                    <li className="margin-bottom">Edo State</li>
                  </ul>
                </div>

                <div className="margin-divide">
                  <ul>
                    <li className="margin-bottom bold">
                                Office
                    </li>
                    <li className="margin-bottom">Presidency</li>
                    <li className="margin-bottom">Senate</li>
                    <li className="margin-bottom">Senate</li>
                    <li className="margin-bottom">House of Rep.</li>
                    <li className="margin-bottom">House of Rep.</li>
                    <li className="margin-bottom">Governorship</li>
                  </ul>
                </div>
                <div className="margin-divide">
                  <ul>
                    <li className="margin-bottom bold">
                                Remarks
                    </li>
                    <li className="margin-bottom">Approved</li>
                    <li className="margin-bottom">Approved</li>
                    <li className="margin-bottom">Approved</li>
                    <li className="margin-bottom">Approved</li>
                    <li className="margin-bottom">Approved</li>
                    <li className="margin-bottom">Approved</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="delete-party">

              <a href="/partyDetails#" id="edit-btn" className="signupbtn">Edit</a>
              <button id="delete-btn" type="submit" className="signupbtn">Delete</button>

            </div>

          </div>
          <div id="del-myModal" className="del-modal">

            <div className="del-modal-content">
              <span className="del-close">&times;</span>
              <h4 className="text-center">This action cannot be reversed!</h4>
              <div id="del-reset-psw">
                <button type="button" id="del-send-link" className="signupbtn">Delete</button>
                <button type="button" id="cancel-link" className="signupbtn">Cancel</button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
);

export default PartyDetails;
