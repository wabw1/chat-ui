import React from "react";
import PropTypes from "prop-types";

import StyledVoiceMessage from "./style";
import Button from "components/Button";
import Icon from "components/Icon";

import { ReactComponent as Wave } from "assets/icons/wave.svg";
import { ReactComponent as Play } from "assets/icons/play.svg";
import { useTheme } from "styled-components";
import Text from "components/Text";

function VoiceMessage({ time, type, ...rest }) {
  const theme = useTheme();
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button>
        <Icon icon={Play} width={14} height={16} color="white" />
      </Button>
      <Icon icon={Wave} color={theme.primaryColor} width="100%" height="100%" />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
};

export default VoiceMessage;
