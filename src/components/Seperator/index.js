import React from "react";
import PropTypes from "prop-types";

import StyledSeperator from "./style";

function Seperator({ ...rest }) {
  return <StyledSeperator {...rest}></StyledSeperator>;
}

Seperator.propTypes = {
  children: PropTypes.any,
};

export default Seperator;
