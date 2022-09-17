import React from "react";
import PropTypes from "prop-types";

import StyledSettings, {
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsItem,
} from "./style";

import Switch from "components/Switch";
import Icon from "components/Icon";

// 导入右箭头
import { ReactComponent as ArrowMenuRight } from "assets/icons/arrowMenuRight.svg";
import Paragraph from "components/Paragraph";
import Seperator from "components/Seperator";
// 导入路由Link
import { Link } from "react-router-dom";
// 导入动画
import { useSpring, animated } from "react-spring";

import "styled-components/macro";

function Settings({ ...rest }) {
  const animeProps = useSpring({
    from: { opacity: 0, transform: "translate3d(200px,0px,0px)" },
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    config: {
      tension: 140,
    },
    delay: 300,
  });

  return (
    <StyledSettings {...rest}>
      <animated.div style={animeProps}>
        <SettingsGroup groupName="隐私设置">
          <SettingsItem label="添加好友时需验证" />
          <SettingsItem
            label="推荐通讯录"
            description="通讯录好友的description...通讯录好友的description"
          />
          <SettingsItem label="只能手机号找到我" />
        </SettingsGroup>
        <SettingsGroup groupName="通知设置">
          <SettingsItem label="新消息通知" />
          <SettingsItem label="语音提醒" />
          <SettingsItem label="通知详情" />
          <SettingsItem label="声音" />
          <Link
            to="/settings/blocked"
            css={`
              text-decoration: none;
              color: inherit;
            `}
          >
            <SettingsItem label="显示mute的好友" type="menu" />
          </Link>
        </SettingsGroup>
      </animated.div>
    </StyledSettings>
  );
}

// 自定义组件Item
function SettingsItem({ type = "switch", label, description, ...rest }) {
  return (
    <StyledSettingsItem>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {/* switch还是menu */}
        {type === "switch" && <Switch />}
        {type === "menu" && <Icon icon={ArrowMenuRight} />}
      </SettingsItemControl>
      {description && (
        <Paragraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Paragraph>
      )}

      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
    </StyledSettingsItem>
  );
}

// 自定义组件Group
function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  );
}

Settings.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Settings;
export { SettingsItem, SettingsGroup };
