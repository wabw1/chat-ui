import React from "react";
import PropTypes from "prop-types";

import StyledMessageList, { ChatList } from "./style";
// import Filter from "components/Filter";
// import Select from "components/Select";
// import Option from "components/Option";
// import Button from "components/Button";
// import Icon from "components/Icon";
// import Input from "components/Input";
import MessageCard from "components/MessageCard";

import face2 from "assets/images/face-female-1.jpg";

import FilterList from "components/FilterList";

// chatFilter
// function ChatFilter() {
//   return (
//     <Filter>
//       <Filter.Filters label="列表排序">
//         <Select>
//           <Option>最新消息</Option>
//           <Option>在线好友</Option>
//         </Select>
//       </Filter.Filters>
//       <Filter.Action label="创建会话">
//         <Button>
//           <Icon icon={Plus} width="12" height="12" />
//         </Button>
//       </Filter.Action>
//     </Filter>
//   );
// }

// function MessageList({ ...rest }) {
//   return (
//     <StyledMessageList {...rest}>
//       <Input.Search />
//       <ChatFilter />
//       <ChatList>
//         {[1, 2, 3, 4, 5, 6].map((val, idx) => (
//           <MessageCard
//             key={idx}
//             avatarSrc={face2}
//             avatarStatus="online"
//             name="Cindy"
//             statusText="在线"
//             time="三小时前"
//             message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
//             unreadCount={2}
//             active={idx === 3}
//             replied={idx % 3 === 0}
//           ></MessageCard>
//         ))}
//       </ChatList>
//     </StyledMessageList>
//   );
// }

// 使用抽离的FilterList重写MessageList
function MessageList({ ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息", "在线好友"]}
        optionLabel="列表排序"
        actionLabel="创建绘画"
      />
      <ChatList>
        {[1, 2, 3, 4, 5, 6].map((val, idx) => (
          <MessageCard
            key={idx}
            avatarSrc={face2}
            avatarStatus="online"
            name="Cindy"
            statusText="在线"
            time="三小时前"
            message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            unreadCount={2}
            active={idx === 3}
            replied={idx % 3 === 0}
          ></MessageCard>
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
