import Radio from ".";

export default {
  title: "UI组件/Input/Radio",
  component: Radio,
};

export const Default = () => {
  return <Radio>选项 </Radio>; //只有一个可以不传name
};

//多个单选
export const RadioGroup = () => {
  return (
    <Radio.Group label="请选择城市">
      <Radio name="city">北京 </Radio>
      <Radio name="city">深圳 </Radio>
      <Radio name="city">杭州 </Radio>
    </Radio.Group>
  );
};
