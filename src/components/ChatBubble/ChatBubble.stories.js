import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";

export default {
  title: "UI组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => {
  return <ChatBubble time="昨天 下午14:04">这是一条原始会话</ChatBubble>;
};

export const FromMine = () => {
  return (
    <ChatBubble time="昨天 下午14:04" type="mine">
      这是一条原始会话
    </ChatBubble>
  );
};

//语音bubble
export const Voice = () => {
  return (
    <ChatBubble time="昨天 下午14:04">
      <VoiceMessage time="01:35" />
    </ChatBubble>
  );
};
export const VoiceFromMine = () => {
  return (
    <ChatBubble time="昨天 下午14:04" type="mine">
      <VoiceMessage time="02:12" type="mine" />
    </ChatBubble>
  );
};
