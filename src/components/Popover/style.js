import styled from "styled-components";

// 自定义样式
// - Content 内容
// - Triangle 小三角
// - Target 附加组件
const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 21px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;
  bottom: calc(100% + 12px);

  // 有偏移  x：左右，y: 上下
  ${({ offset }) =>
    offset && `transform: translate(${offset.x || 0},${offset.y || 0});`}

  // visible为false时 设置display：none
	${({ visible }) => !visible && `display: none`}
`;

//三角形的套路
const Triangle = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: ${({ theme }) => theme.background} transparent transparent
    transparent;
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);

  // 只能上下偏移
  ${({ offset }) => offset && `transform: translateY(${offset.y || 0});`}

  ${({ visible }) => !visible && `display: none`};
`;

const Target = styled.div``;

const StyledPopover = styled.div`
  display: flex;
  justify-content: center;
  position: relative; //外层容器相对定位
`;

export default StyledPopover;
export { Content, Triangle, Target };
