import React from "react";
import PropTypes from "prop-types";

import StyledParagraph from "./style";

// ellipsis：bool是否省略显示
function Paragraph({ children, showFirstletter, ellipsis, ...rest }) {
  return (
    <StyledParagraph
      as="p"
      showFirstletter={showFirstletter}
      ellipsis={ellipsis}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  showFirstletter: PropTypes.bool,
  ellipsis: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "normal",
    "medium",
    "small",
    "xsmall",
    "xxsmall",
    "large",
    "xlarge",
    "xxlarge",
  ]),
  bold: PropTypes.bool,
};

export default Paragraph;
