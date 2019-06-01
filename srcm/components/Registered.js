import React from 'react';

const Registered = () => (
  <header className="head-login">
    <div>
      <ul>
        <li id="head-text">
          <a href="/login" dangerouslySetInnerHTML={{ __html: '&Popf;&oopf;&lopf;&iopf;&topf;&iopf;&copf;O' }} />
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
);

export default Registered;
