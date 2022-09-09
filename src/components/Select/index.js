import React from "react";
import PropTypes from "prop-types";

import StyledSelect from "./style";
import LabelContainer from "components/LabelContainer";

// 重构： 添加label, type:可为form
// 把不带label的剩下一堆定义一个常量，有label包裹在LabelContainer, 没有的不管
function Select({ label, type, children, ...rest }) {
  const SelectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );

  return label ? (
    <LabelContainer label={label}>{SelectWithoutLabel}</LabelContainer>
  ) : (
    SelectWithoutLabel
  );
}

Select.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["form"]), //目前只支持form
};

export default Select;
