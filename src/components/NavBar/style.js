import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledAvatar, { StatusIcon } from "components/Avatar/style"; // 修改组件里Avatar组件的样式

import styled from "styled-components";
import { activeBar } from "utils/mixins";
// 带样式的单个图标 Icon
const MenuIcon = styled(FontAwesomeIcon)`
  /* font-size: ${({ fontSize }) => `${fontSize}`};  // 自定义FontAwesomeIcon的size */
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};

  // 增加按钮划过的放大效果
  transform: scale(1);
  transition: 0.4s;
`;

// 带样式的单个MenuItem
const StyledMenuItem = styled.div`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    justify-content: center;
    align-items: center;

    // 调用activeBar()
    // 方法1. 不传参，默认选中 , 传0时 barWidth和阴影为0
    /* ${({ active }) => (active ? activeBar() : activeBar({ barWidth: 0, shadowWidth: 0 }))} */

    // 方法2. 推荐下面的方式，因为方便设置动画  (active==false)
    ${activeBar()}
    ${({ active }) => (active ? "" : `&::before,&::after{height: 0;}`)}
    
    //给下面的NavLink添加active类的样式（但解决不了第一个link恒为active)s
    &.active {
      ${activeBar()}
    }

    // 伪类hover
    &:hover,
    &:active {
      // 伪元素before/after
      ::before,
      ::after {
        height: 100%;
      }
      svg {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  }
`;

// MenuItem的容器，  grid布局
const MenuItems = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr; //前五个在74-88中间，最后一个占满剩下空间
`;

/* 最外层的大容器（侧边栏）  nav标签渲染 */
const StyledNavBar = styled.nav`
  background-color: ${({ theme }) => theme.darkPurple};
  // grid
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: ${({ navSize }) => `${navSize}`}; // 自定义，也可以写死
  height: 100vh;
  padding: 30px 0;

  // 修改Avatar组件的样式，一定要引用StyledAvatar (包装过的)
  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;

export default StyledNavBar;
export { MenuIcon, StyledMenuItem, MenuItems }; //导出自定义样式
