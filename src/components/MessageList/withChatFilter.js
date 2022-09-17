// import Filter from "components/Filter";
// import Select from "components/Select";
// import Option from "components/Option";
// import Button from "components/Button";
// import Icon from "components/Icon";
// import Input from "components/Input";

// chatFilter
function ChatFilter() {
  return (
    <Filter>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息</Option>
          <Option>在线好友</Option>
        </Select>
      </Filter.Filters>
      <Filter.Action label="创建会话">
        <Button>
          <Icon icon={Plus} width="12" height="12" />
        </Button>
      </Filter.Action>
    </Filter>
  );
}

// 自己拼接的包含 Input.Search + ChatFilter + ChatList 的 <MessageList />
function MessageList({ ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <Input.Search />
      <ChatFilter />
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

export default MessageList;
