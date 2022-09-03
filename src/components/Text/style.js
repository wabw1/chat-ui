import styled, { css } from "styled-components";

// 颜色和尺寸的变体
const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.greyInput};
  `,
  secondary: css`
    color: ${({ theme }) => theme.greyInput};
    opacity: 0.3; // 这里写成color是因为 opacity需要单独写
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};

const sizeVariants = {
  normal: css`
    font-size: ${({ theme }) => theme.normal};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.medium};
  `,
  small: css`
    font-size: ${({ theme }) => theme.small};
  `,
  xsmall: css`
    font-size: ${({ theme }) => theme.xsmall};
  `,
  xxsmall: css`
    font-size: ${({ theme }) => theme.xxsmall};
  `,
  large: css`
    font-size: ${({ theme }) => theme.large};
  `,
  xlarge: css`
    font-size: ${({ theme }) => theme.xlarge};
  `,
  xxlarge: css`
    font-size: ${({ theme }) => theme.xxlarge};
  `,
};

const StyledText = styled.span`
  ${({ size }) => sizeVariants[size]}
  // 颜色
  ${({ type }) => typeVariants[type]}
  // 加粗
  ${({ bold }) => bold && `font-weight: bold`}
`;

export default StyledText;
