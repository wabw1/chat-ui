import React from "react";
import PropTypes from "prop-types";

import face1 from "../../assets/images/face-male-1.jpg";

function Avatar(props) {
  return (
    <div>
      <div></div>
      <div>
        <img src={face1} alt="" />
      </div>
    </div>
  );
}

Avatar.propTypes = {};

export default Avatar;
