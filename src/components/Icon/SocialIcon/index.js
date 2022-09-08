import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//在index.js里用css属性：macro
import "styled-components/macro";

function SocialIcon({ icon, bgColor, href, ...rest }) {
  return (
    // SocialIcon的Button 去掉scale
    <Button
      bgColor={bgColor}
      size="30px"
      {...rest}
      onClick={() => href && window.open(href, "_blank")}
      css={`
        &:hover {
          transform: none;
        }
      `}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
    </Button>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.elementType,
  bgColor: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
