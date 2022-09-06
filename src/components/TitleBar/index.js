import React from "react";
import PropTypes from "prop-types";

import StyledTitleBar, { Actions, Title } from "./style";

import face from "assets/images/face-female-2.jpg";
import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";

import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";

function TitleBar({ status = "offline", ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar src={face} status={status} />
      <Title>
        <Paragraph size="large">Guile</Paragraph>
        {status === "offline" ? (
          <Paragraph type="secondary">
            <Text>离线 </Text>
            <Text>· 最后阅读：三小时前</Text>
          </Paragraph>
        ) : (
          <Paragraph type="secondary">
            <Text>在线 </Text>
            <Text>· 最后阅读：三小时前</Text>
          </Paragraph>
        )}
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.5} />
        <Icon icon={Camera} opacity={0.5} />
        <Icon icon={Options} opacity={0.5} />
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
