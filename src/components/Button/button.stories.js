import Icon from "components/Icon";
import Button from ".";
import { ReactComponent as Plus } from "assets/icons/plus.svg"; //引入svg为React组件

export default {
  title: "Button",
  component: Button,
};

export const Default = () => {
  return <Button> Default </Button>;
};

// 基础原型按钮
export const RectButton = () => <Button shape="rect">Rect</Button>;
export const CircleButton = () => (
  <Button shape="circle">
    <Icon icon={Plus} height="12" width="12" />
  </Button>
);
