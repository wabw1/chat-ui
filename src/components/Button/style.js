import styled, { css } from "styled-components";

// 形状变体
const shapeVariants = {
  circle: css`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  rect: css`
    padding: 12px 18px;
    border-radius: 6px;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  `,
};

// 主题颜色变体
const typeVariants = {
  primary: css`
    color: white;
    background-color: ${({ theme }) => theme.primaryColor};
  `,
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1); //阴影
  ${({ shape }) => shapeVariants[shape]}
  ${({ type }) => typeVariants[type]}
	// 自定义背景色
	background-color: ${({ bgColor }) => bgColor};

  // 过渡动画
  transform: scale(1); //?
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledButton;
