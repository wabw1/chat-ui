import styled, { css } from "styled-components";

// 类似单选，Slider为span图标，Checkbox为实际控制

const Slider = styled.span`
  // 灰色背景滑动槽   (撑满外层容器)
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.greyBox};
  border-radius: 16px;
  transition: 0.4s;

  // 伪元素before
  &::before {
    content: "";
    display: block;
    background-color: white;
    width: 28px;
    height: 28px;
    position: absolute; //绝对定位
    top: 1px;
    left: 1px;
    border-radius: 50%; //圆角
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.1),
      0 3px 1px rgba(0, 0, 0, 0.05);
    transition: 0.4s;
  }
`;

// 实际控制的input=checkbox标签
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  // 原有的选择框消灭掉😝
  height: 0;
  width: 0;
  opacity: 0;

  position: absolute;
  left: 100px;
  // 伪类checked,当它被选中的时候，设置邻居Slider的样式 （背景色改变，::before位移右移20px)
  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryColor};
    // 原型右移
    &::before {
      transform: translateX(20px);
    }
  }
`;

//最外层容器
const StyledSwitch = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 51px;
  height: 31px;
  position: relative; //方便 Slider定位
`;

export default StyledSwitch;
export { Slider, Checkbox };
