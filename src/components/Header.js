import React from 'react';

const Header = () => (
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
          <a id="signup-btn" href="login.html">Login</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
