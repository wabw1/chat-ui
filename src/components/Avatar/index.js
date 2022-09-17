// rfcp   functionComponentwithProptypes

import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";

import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style"; // 替换掉所有的

function Avatar({
  src,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {/* 没有status就不会显示 */}

      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}

      <AvatarClip size={size}>
        <AvatarImage src={src} alt="avatar-alt" />
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};

export default Avatar;
