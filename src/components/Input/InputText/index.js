import React from "react";
import PropTypes from "prop-types";

import StyledInputText, { InputUnderline } from "./style";
import LabelContainer from "components/LabelContainer";

function InputText({ label, placeholder = "请输入内容...", ...rest }) {
  const MyInput = <InputUnderline type="text" placeholder={placeholder} />; //定义常量
  return (
    <StyledInputText {...rest}>
      {label ? (
        <LabelContainer label={label}>{MyInput}</LabelContainer>
      ) : (
        MyInput
      )}
    </StyledInputText>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
