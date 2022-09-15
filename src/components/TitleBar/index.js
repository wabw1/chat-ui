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
// import { useTheme } from "styled-components";
import Dropdown from "components/Dropdown";
import { DropdownItem } from "components/Dropdown/style";
import Seperator from "components/Seperator";
// 定义一个dropdownContent
const Content = (
  <>
    <DropdownItem>
      <Paragraph>个人资料</Paragraph>
    </DropdownItem>
    <DropdownItem>
      <Paragraph>关闭会话</Paragraph>
    </DropdownItem>
    <Seperator />
    <DropdownItem>
      <Paragraph type="danger">屏蔽此人</Paragraph>
    </DropdownItem>
  </>
);

function TitleBar({ onAvatarClick, status = "offline", ...rest }) {
  // 使用主题里的颜色
  // const theme = useTheme();
  return (
    <StyledTitleBar {...rest}>
      <Avatar onClick={onAvatarClick} src={face} status={status} />
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
        <Dropdown content={Content}>
          <Icon icon={Options} opacity={0.5} />
        </Dropdown>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
