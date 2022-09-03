import Text from ".";

export default {
  title: "排版 /Text",
  component: Text,
};

export const Default = () => {
  return (
    <div>
      <Text type="danger" bold={false}>
        Container
      </Text>
      <br />
      <Text type="danger" bold>
        英文可以加粗，中文不行orz
      </Text>
      <br />
      <span style={{ fontWeight: 500, fontSize: "2.4rem" }}>这是原生span</span>
    </div>
  );
};

export const Type = () => {
  return (
    <div>
      <Text type="primary">Primary颜色字体</Text>
      <br />
      <Text type="secondary">Secondary颜色字体</Text>
      <br />
      <Text type="danger">Danger颜色字体</Text>;
    </div>
  );
};
export const Size = () => {
  return (
    <div>
      <Text size="normal">normal大小字体</Text>
      <br />
      <Text size="medium">medium大小字体</Text>
      <br />
      <Text size="small">small大小字体</Text>
      <br />
      <Text size="xxsmall">xxsmall大小字体</Text>
      <br />
      <Text size="large">large大小字体</Text>
      <br />
      <Text size="xxlarge">xxlarge大小字体</Text>
    </div>
  );
};
