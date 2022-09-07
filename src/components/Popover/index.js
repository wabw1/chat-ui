import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledPopover, { Content, Target, Triangle } from "./style";

function Popover({ children, content, offset, onHide, onVisible, ...rest }) {
  const [visible, setVisible] = useState(false); //默认不显示
  const handleClick = () => {
    if (visible) {
      setVisible(false);
      onHide && onHide(); //有函数的话，调用即可
    }
    if (!visible) {
      setVisible(true);
      onVisible && onVisible(); //有函数的话，调用即可
    }
  };

  return (
    <StyledPopover onClick={handleClick} {...rest}>
      <Content visible={visible} offset={offset}>
        {content}
      </Content>
      <Triangle visible={visible} offset={offset} />
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  content: PropTypes.any,
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
};

export default Popover;
