import Paragraph from "components/Paragraph";
import Seperator from "components/Seperator";
import Icon from "components/Icon";
import Text from "components/Text";
import Dropdown from ".";
import { DropdownItem } from "./style";

import { ReactComponent as Options } from "assets/icons/options.svg";

export default {
  title: "Dropdown",
  component: Dropdown,
};

// 定义一个dropdownContent
const Content = (
  <>
    <DropdownItem>
      <Paragraph>个人资料</Paragraph>
    </DropdownItem>
    <DropdownItem>
      <Paragraph>关闭会话</Paragraph>
    </DropdownItem>
    <Seperator />
    <DropdownItem>
      <Paragraph type="danger">屏蔽此人</Paragraph>
    </DropdownItem>
  </>
);

export const Default = () => {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
      }}
    >
      <Text>点击按钮</Text>
      <Dropdown content={Content}>
        <Icon icon={Options} opacity="0.5" />
      </Dropdown>
    </div>
  );
};

export const Left = () => {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
      }}
    >
      <Text>点击按钮</Text>
      <Dropdown content={Content} align="left">
        <Icon icon={Options} opacity="0.5" />
      </Dropdown>
    </div>
  );
};
