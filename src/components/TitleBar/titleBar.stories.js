import TitleBar from ".";

export default {
  title: "UI组件/TitleBar",
  component: TitleBar,
};

export const Default = () => {
  return <TitleBar />;
};

export const Online = () => {
  return <TitleBar status="online" />;
};
