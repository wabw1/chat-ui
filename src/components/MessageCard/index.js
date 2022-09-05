import React from "react";
import PropTypes from "prop-types";

import StyledMessageCard, {
  Message,
  MessageText,
  Name,
  Status,
  Time,
  UnreadBadge,
} from "./style";
import Avatar from "components/Avatar";
import { useTheme } from "styled-components";
import Icon from "components/Icon";

import { ReactComponent as Replied } from "assets/icons/replied.svg"; //导入回复图标

function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
  ...rest
}) {
  // 使用主题hook
  const theme = useTheme();

  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar src={avatarSrc} status={avatarStatus} />
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time> {time} </Time>
      <Message replied={replied} active={active}>
        {replied && (
          <Icon
            icon={Replied}
            width={16}
            height={14}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{ justifyContent: "start" }}
          />
        )}
        <MessageText size="normal">{message}</MessageText>
        <UnreadBadge count={unreadCount}></UnreadBadge>
      </Message>
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  children: PropTypes.any,
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
};

export default MessageCard;
