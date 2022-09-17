import React, { useState } from "react";
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

import { useNavigate } from "react-router-dom"; //代替useHistory

//导入数据
import blockedData from "data/blocked";

// 页面组件（组装的）一般都没有children
function BlockedList({ ...rest }) {
  // 编程式控制路由
  const navigate = useNavigate(); //

  const initFriends = blockedData; //导入初始列表

  const [friends, setFriends] = useState(initFriends); //不能用idx作为key
  // 删除函数，删掉第idx项
  const onHandleDelete = (idx) => {
    setFriends(friends.filter((val, i) => val.id !== idx));
  };
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
        {friends.map((friend) => (
          <ClosableAvatar
            key={friend.id}
            onClick={() => onHandleDelete(friend.id)}
          >
            <BlockedAvatar src={friend.avatar} size="105px" />
            <CloseIcon width={46} height={51} icon={CloseCircle} />
            <BlockedName>{friend.name}</BlockedName>
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
