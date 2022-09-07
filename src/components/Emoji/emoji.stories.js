import Emoji from ".";

export default {
  title: "UI组件/Emoji",
  component: Emoji,
};

export const Default = () => {
  return (
    <div>
      <Emoji label="smile">😬</Emoji>
      <Emoji label="todo">✅</Emoji>
      <Emoji label="clock">⏰</Emoji>
    </div>
  );
};
