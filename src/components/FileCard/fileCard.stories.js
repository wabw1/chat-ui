import FileCard from ".";

export default {
  title: "UI组件/FileCard",
  component: FileCard,
};

export const Default = () => {
  return <FileCard name="Soucecode.zip" size="14.7M" time="下午 13:00" />;
};
