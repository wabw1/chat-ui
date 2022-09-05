import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph,
};

export const Default = () => {
  return (
    <>
      <Paragraph>测试换行 </Paragraph>
      <Paragraph size="large">测试换行(large) </Paragraph>
    </>
    // 也可使用<React.Fragment> </React.Fragment>
  );
};

export const WithEllipsis = () => {
  return (
    <Paragraph ellipsis size="large">
      一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号一段超长文本带省略号
    </Paragraph>
  );
};

export const WithFirst = () => {
  return (
    <>
      <Paragraph showFirstletter>测试首字变色</Paragraph>
      <Paragraph showFirstletter size="large">
        测试首字变色(large){" "}
      </Paragraph>
    </>
  );
};
