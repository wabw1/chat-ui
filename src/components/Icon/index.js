import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./style";
import SocialIcon from "./SocialIcon"; //导进来SocialIcon 作为子组件

// 传进来的svg文件，命名为icon, 是个组件
function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
}

// SocialIcon作为Icon的子组件导出
Icon.Social = SocialIcon;

// elementType为React组件
Icon.propTypes = {
  icon: PropTypes.elementType,
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
