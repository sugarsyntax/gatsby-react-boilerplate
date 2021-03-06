import React from 'react';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="d-flex">
      <div className="flex-column">
        <div className="col-12">
          <div className="header-content">
            <span className="header-logo">
              <span style={{ color:"#fb9999" }}>J</span>
              <span style={{ color:"#fc9ca7" }}>a</span>
              <span style={{ color:"#fc9fb4" }}>c</span>
              <span style={{ color:"#fda2c2" }}>q</span>
              <span style={{ color:"#b3b177" }}>u</span>
              <span style={{ color:"#68bf2b" }}>e</span>
              <span style={{ color:"#59d11d" }}>l</span>
              <span style={{ color:"#49e40f" }}>l</span>
              <span style={{ color:"#3af601" }}>i</span>
              <span style={{ color:"#72eb74" }}>n</span>
              <span style={{ color:"#aadfe7" }}>e</span>
            </span>
            <nav className=" flex-row header-nav container-fluid col-12">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <a href="#features">About me</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Portfolio</a>
                </li>
                <li className="header-nav-list-item">
                  <a href="#howto">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
