import styled from "styled-components";

// 自定义圆圈
const Circle = styled.span`
  width: 16px;
  height: 16px;
  line-height: 16px;
  border: 1px solid ${({ theme }) => theme.green2};
  border-radius: 50%;

  position: absolute;
  left: 0;
  top: 0;

  //选中状态的实心圆 - after伪元素
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.green2};
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
    // 未选中状态 opacity=0，设置动画transform: scale(0)
    opacity: 0;
    transform: scale(0);
    transition: 0.3s ease;
  }
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  // 完全隐藏自带的选中圈
  width: 0;
  height: 0;
  opacity: 0;
  //选中状态，对邻居<Circle/>的::after做更改 （非选中同理）
  &:checked + ${Circle}::after {
    opacity: 1;
    transform: scale(1);
  }
  &:not(:checked) + ${Circle}::after {
    opacity: 0;
    transform: scale(0);
  }
`;

//外层容器
const StyledRadio = styled.label`
  display: inline-block; //容器为inline-block
  position: relative;
  padding-left: 22px;
  line-height: 16px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.normal};
`; //用<label/>渲染

// 一组Radio的容器
const StyledRadioGroup = styled.div`
  display: flex;
  // 除了第一个孩子，后面的左边距
  & > *:not(:first-child) {
    margin-left: 24px;
  }
`;

export default StyledRadio;
export { Circle, RadioButton, StyledRadioGroup };
