import React from "react";
import PropTypes from "prop-types";

import StyledLabelContainer from "./style";
import Text from "components/Text";

// 这里的children可以是<input/> 或者别的什么checkbox
function LabelContainer({ children, label, ...rest }) {
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}: </Text>}
      {children}
    </StyledLabelContainer>
  );
}

LabelContainer.propTypes = {
  children: PropTypes.any,
};

export default LabelContainer;
