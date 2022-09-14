import Heading from "components/Heading";
import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Popover from "components/Popover";
import styled from "styled-components";
import { card } from "utils/mixins";

// 自定义
const FileIcon = styled(Icon)`
  width: 60;
  height: 60; //svg没有单位
  grid-area: icon;
`;
const FileName = styled(Heading).attrs({ level: "2" })`
  grid-area: name;
  align-items: center;
`;
const FileSize = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: size;
  align-items: center;
`;

const Options = styled(Popover)`
  grid-area: opt;
  justify-self: end;
  align-items: center;
`;
const Time = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  justify-self: end;
  align-items: center;
`;

//外层总容器
const StyledFileCard = styled.div`
  //card mixin
  ${card()}
  display: grid;
  grid-template-areas:
    "icon name opt"
    "icon size time";
  grid-template-columns: 74px 1fr 1fr;
`;

export default StyledFileCard;
export { FileIcon, FileName, FileSize, Options, Time };
