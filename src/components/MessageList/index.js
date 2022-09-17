import React from "react";
import PropTypes from "prop-types";

import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-female-1.jpg";

import FilterList from "components/FilterList";

// 引入spring
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

// 使用抽离的FilterList重写MessageList
function MessageList({ ...rest }) {
  const trailAnimes = useStaggeredList(6);
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息", "在线好友"]}
        optionLabel="列表排序"
        actionLabel="创建会话"
      />
      <ChatList>
        {[1, 2, 3, 4, 5, 6].map((val, idx) => (
          <animated.div key={idx} style={trailAnimes[idx]}>
            <MessageCard
              key={idx}
              avatarSrc={face1}
              avatarStatus="online"
              name="Cindy"
              statusText="在线"
              time="三小时前"
              message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
              unreadCount={2}
              active={idx === 3}
              replied={idx % 3 === 0}
            />
          </animated.div>
        ))}
      </ChatList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
// export { MessageList1 }; // 导出改进版的使用FilerLIst的MessageList
