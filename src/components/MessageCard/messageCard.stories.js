import MessageCard from ".";

import face2 from "assets/images/face-female-2.jpg";

export default {
  title: "UI组件/MessageCard",
  component: MessageCard,
};

export const Default = () => {
  return (
    <MessageCard
      avatarSrc={face2}
      avatarStatus="online"
      name="Cindy"
      statusText="在线"
      time="三小时前"
      message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      unreadCount={2}
    ></MessageCard>
  );
};

export const Active = () => {
  return (
    <MessageCard
      avatarSrc={face2}
      avatarStatus="online"
      name="Cindy"
      statusText="在线"
      time="三小时前"
      message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      unreadCount={2}
      active
    ></MessageCard>
  );
};

export const Replied = () => {
  return (
    <MessageCard
      avatarSrc={face2}
      avatarStatus="online"
      name="Cindy"
      statusText="在线"
      time="三小时前"
      message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      unreadCount={2}
      replied
    ></MessageCard>
  );
};

export const RepliedActive = () => {
  return (
    <MessageCard
      avatarSrc={face2}
      avatarStatus="online"
      name="Cindy"
      statusText="在线"
      time="三小时前"
      message="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
      unreadCount={2}
      active
      replied
    ></MessageCard>
  );
};
