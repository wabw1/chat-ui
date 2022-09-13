import Avatar from "components/Avatar";
import Icon from "components/Icon";
import Text from "components/Text";
import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

const BlockedAvatar = styled(Avatar)`
  grid-area: av;
`;
const BlockedName = styled(Text).attrs({ size: "xlarge" })`
  margin-top: 20px;
  grid-area: name;
`;
const CloseIcon = styled(Icon)`
  grid-area: 2/3/5/4;
  margin-top: 10px;
  z-index: 10;
`;

// 头像部分容器
const ClosableAvatar = styled.div`
  display: grid;
  grid-template-areas:
    " av av av "
    " av av av"
    " av av av"
    " name name name";
  justify-items: center;
`;

// 头像组的容器
const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  /* justify-content: center; */ //这个无用
  justify-items: center;
`;

// 自定义SettingsMenu (只是最上面的)
const SettingsMenu = styled.div`
  height: 148px;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;

  ${StyledText} {
    /* grid-column: span 1/-1; //让在整个屏幕居中 */
    justify-self: center;
  }
`;

// 最外层容器
const StyledBlockedList = styled.div`
  padding: 2vh 4vw;
`;

export default StyledBlockedList;
export { SettingsMenu };
export { BlockedAvatar, BlockedName, CloseIcon, ClosableAvatar, FriendList };
