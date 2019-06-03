import React from 'react';
import { ToastContainer } from 'react-toastify';
import Party from '../containers/Party';
import Footer from './Footer';

const PartyComp = () => (
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
    <section className="home-sectionb home-section-homeb">
      {' '}
      <div id="action-wordb">
        <div>
          {/* <h2 className="centre">
          Welcome to
            <span> Politico, </span>
          vote at the click of a button!
          </h2> */}
          <Party />
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
    <Footer />
  </div>
);
export default PartyComp;
