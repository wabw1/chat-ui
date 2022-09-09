import Option from "components/Option";
import Select from ".";
import "styled-components/macro";

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

// type=form
export const SelectFormWithLabel = () => {
  return (
    <Select type="form" label="选择城市">
      <Option>广州市</Option>
      <Option>深圳市</Option>
    </Select>
  );
};
