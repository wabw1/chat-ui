import ContactCard from ".";

// 导入头像
import face from "assets/images/face-female-4.jpg";

export default {
  title: "UI组件/ContactCard",
  component: ContactCard,
};

export const Default = () => {
  return (
    <ContactCard
      avatarSrc={face}
      status="online"
      name="Tom"
      intro="this is the introduction"
    />
  );
};
