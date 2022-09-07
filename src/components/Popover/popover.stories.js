import Button from "components/Button";
import ChatBubble from "components/ChatBubble";
import Popover from ".";

export default {
  title: "UI组件/Popover",
  component: Popover,
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Popover content="hello!">
        <Button shape="rect">点我</Button>
      </Popover>
    </div>
  );
};

//带偏移的
export const WithOffset = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Popover offset={{ x: "-25px", y: "-5px" }} content="hello!">
        <Button shape="rect">点我</Button>
      </Popover>
    </div>
  );
};
