import StyledText from "components/Text/style";
import styled from "styled-components";

// 包裹Filters
const Filters = styled.div``;

//包裹Action（按钮和label
const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;

const StyledFilter = styled.div`
  /* border: 2px solid; */
  display: grid;
  grid-template-columns: 2fr 1fr; //一行分三块
  align-items: center;
`;

export default StyledFilter;
export { Filters, Action }; //自定义导出子组件样式
