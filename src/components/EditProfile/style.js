import Text from "components/Text";
import styled from "styled-components";

// 标题
const GroupTitle = styled(Text).attrs({ size: "large" })`
  align-self: end;
`;

// 性别与地区 容器
const GenderAndSpace = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; //两列均分    gender | space
  /* justify-content: space-between; */
  /* justify-items: space-between; */
`;
// 地区的三个下拉选项列表
const SelectGroup = styled.div`
  // 内部的所有Select组件 flex margin:4px 同时消除首位的margin
  /* & > * {
    margin: 0 40px;
  }
  margin: 0 -40px; */
  /* 这种写法也行  */
  display: flex;
  justify-content: start;
  & > * {
    margin-right: 10px;
  }
`;

// 自定义StyledIconInput   - Grid布局
const StyledIconInput = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  // 元素下对齐
  align-items: end;
`;

const StyledEditProfile = styled.div`
  // 只有一列grid布局，行间距20px, padding 30px,最大高度100vh超出显示滚动条，
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default StyledEditProfile;
export { GroupTitle, SelectGroup, GenderAndSpace };
export { StyledIconInput };
