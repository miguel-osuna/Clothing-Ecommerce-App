import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../lib/firebase.utils";
import PropTypes from "prop-types";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const propTypes = {
  currentUser: PropTypes.object,
};

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

Header.propTypes = propTypes;

export default Header;
