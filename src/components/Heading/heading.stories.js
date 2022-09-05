import Heading from ".";

export default {
  title: "排版/Heading",
  component: Heading,
};

export const Default = () => {
  return <Heading level={1}>标题1 </Heading>;
};

export const H2 = () => <Heading level={2}>标题2</Heading>;
export const H3 = () => <Heading level={3}>标题3</Heading>;
export const H4 = () => <Heading level={4}>标题4</Heading>;
export const H5 = () => <Heading level={5}>标题5</Heading>;
