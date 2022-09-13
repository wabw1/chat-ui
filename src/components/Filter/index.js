import React from "react";
import PropTypes from "prop-types";

import StyledFilter, { Filters, Action } from "./style";
import Text from "components/Text";

function Filter({ children, ...rest }) {
  return <StyledFilter {...rest}>{children}</StyledFilter>;
}

//子组件
Filter.Filters = ({ children, label, ...rest }) => {
  return (
    <Filters {...rest}>
      <Text type="secondary">{label}: </Text>
      {children}
    </Filters>
  );
};

Filter.Action = ({ children, label, ...rest }) => {
  return (
    <Action {...rest}>
      <Text type="secondary">{label}: </Text>
      {children}
    </Action>
  );
};

//子组件导出
// Filter.Filters = Filters;
// Filter.Action = Action;

// 类型检查
Filter.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
};

export default Filter;
