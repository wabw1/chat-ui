import React from "react";
import PropTypes from "prop-types";

import StyledBlockedList, {
  BlockedAvatar,
  BlockedName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from "./style";

import "styled-components/macro"; //css

// 返回箭头
import { ReactComponent as ArrowLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as CloseCircle } from "assets/icons/closeCircle.svg";
import Text from "components/Text";
import Icon from "components/Icon";

import face from "assets/images/face-female-1.jpg";
import { useNavigate } from "react-router-dom"; //代替useHistory

// 页面组件（组装的）一般都没有children
function BlockedList({ ...rest }) {
  // 编程式控制路由
  const navigate = useNavigate(); //
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => navigate(-1)}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((val, i) => (
          <ClosableAvatar key={i}>
            <BlockedAvatar src={face} size="105px" />
            <CloseIcon width={46} height={51} icon={CloseCircle} />
            <BlockedName>Erin</BlockedName>
          </ClosableAvatar>
        ))}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
