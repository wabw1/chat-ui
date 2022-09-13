import NoteCard from ".";

import p from "assets/images/photo1.jpg";

export default {
  title: "NoteCard",
  component: NoteCard,
};

export const Default = () => {
  return (
    <NoteCard
      imgSrc={p}
      name="笔记标题"
      abs="这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记"
      time="上午12:04"
    />
  );
};
