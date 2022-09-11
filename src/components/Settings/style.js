import styled, { css } from "styled-components";

// 布局样式用
const StyledSettingsItem = styled.div``;

// 每一个Item的容器
const SettingsItemControl = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 外层Group
const StyledSettingsGroup = styled.div``;

// 整体容器
const StyledSettings = styled.div`
  padding: 72px;
`;

export default StyledSettings;
export { StyledSettingsItem, SettingsItemControl, StyledSettingsGroup };
