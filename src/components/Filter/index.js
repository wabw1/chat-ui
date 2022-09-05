import React from "react";
import PropTypes from "prop-types";

import StyledFilter from "./style";

function Filter({ children, ...rest }) {
  return <StyledFilter {...rest}>{children}</StyledFilter>;
}

//子组件导出
function Filters({}) {}

Filter.propTypes = {
  children: PropTypes.any,
};

export default Filter;
