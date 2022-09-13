import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import styled, { css } from "styled-components";
import { card } from "utils/mixins";

//自定义
const NoteImage = styled.img`
  grid-area: img;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const NoteName = styled(Heading).attrs({ level: 2 })`
  grid-area: name;
  align-self: center;
`;
// 文本超长会隐藏
const NoteAbstract = styled(Paragraph).attrs({ size: "small", ellipsis: true })`
  grid-area: abs;
  align-self: center;
`;
const Time = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  align-self: center;
  justify-self: end;
`;

const StyledNoteCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "img name time"
    "img abs abs";
  grid-template-columns: 74px 2fr 1fr;
`;

export default StyledNoteCard;
export { NoteAbstract, NoteImage, NoteName, Time };
