import Profile from ".";

export default {
  title: "页面组件/Profile",
  component: Profile,
};

export const Default = () => {
  return <Profile status="online" />;
};
