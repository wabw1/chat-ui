import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledDropdown, { DropdownContainer } from "./style";

// 传递了content才会显示，没有的话，就当套了一层容器
function Dropdown({ content, align = "right", children, ...rest }) {
  const [visible, setVisible] = useState(false); //默认不显示

  return (
    <StyledDropdown onClick={() => setVisible(!visible)} {...rest}>
      {children}
      {content && (
        <DropdownContainer visible={visible} align={align}>
          {content}
        </DropdownContainer>
      )}
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  align: PropTypes.oneOf(["top", "bottom", "right", "left"]),
};

export default Dropdown;
