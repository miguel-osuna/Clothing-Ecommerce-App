import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./menu-item.styles.scss";

const propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  history: PropTypes.object,
  linkUrl: PropTypes.string,
};

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  let menuItemClass = classNames({
    "menu-item": true,
    [`${size}`]: true,
  });

  return (
    <div className={menuItemClass} onClick={() => history.push(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = propTypes;

export default withRouter(MenuItem);
