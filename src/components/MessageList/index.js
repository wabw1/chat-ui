import React from "react";
import PropTypes from "prop-types";

import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";
import FilterList from "components/FilterList";

// 引入spring
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

// 导入数据
import messageData from "data/messages";

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
        {messageData.map((message, idx) => (
          <animated.div key={message.id} style={trailAnimes[idx]}>
            <MessageCard
              key={message.id}
              avatarSrc={message.avatarSrc}
              avatarStatus={message.avatarStatus}
              name={message.name}
              statusText={message.statusText}
              time={message.time}
              message={message.message}
              unreadCount={message.unreadCount}
              active={idx === 3}
              replied={message.replied}
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
