import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledRadio, { Circle, RadioButton, StyledRadioGroup } from "./style";
import LabelContainer from "components/LabelContainer";

//单个
function Radio({ name, children, ...rest }) {
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name} />
      <Circle />
    </StyledRadio>
  );
}

// 一组Radios
function RadioGroup({ name, label, children, ...rest }) {
  return (
    <LabelContainer label={label}>
      <StyledRadioGroup name={name} {...rest}>
        {children}
      </StyledRadioGroup>
    </LabelContainer>
  );
}
Radio.Group = RadioGroup;

Radio.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
};

//RadioGroup也需要类型检查
RadioGroup.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
};

export default Radio;
