import StyledAvatar from "components/Avatar/style";
import Paragraph from "components/Paragraph";
import styled, { css } from "styled-components";
import { card } from "utils/mixins";

// 自定义样式
const Name = styled(Paragraph).attrs({ size: "large" })`
  grid-area: name;
`;
const Intro = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: intro;
`;

const StyledContactCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "avatar name"
    "avatar intro";
  grid-template-columns: 64px 1fr;

  // 放头像的位置
  ${StyledAvatar} {
    grid-area: avatar;
  }
`;

export default StyledContactCard;
export { Name, Intro };
