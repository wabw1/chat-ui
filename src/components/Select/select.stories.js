import Option from "components/Option";
import Select from ".";

export default {
  title: "UI组件/Input/Select",
  component: Select,
};

export const Default = () => {
  return (
    <Select>
      <Option>最新消息</Option>
      <Option>在线消息</Option>
    </Select>
  );
};
