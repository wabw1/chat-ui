import styled, { css } from "styled-components";

// type=color 变体
const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.greyInput};
  `,
  secondary: css`
    color: ${({ theme }) => theme.greyInput}
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
};
const sizeVariants = {
  normal: css`
    ${({ theme }) => theme.normal};
  `,
  medium: css`
    ${({ theme }) => theme.medium};
  `,
  small: css`
    ${({ theme }) => theme.small};
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall};
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsmall};
  `,
  large: css`
    ${({ theme }) => theme.large};
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge};
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge};
  `,
};

// 根据variant，取size和type
// 没有传size就默认normal
const StyledText = styled.span`
  font-size: ${({ size }) => sizeVariants[size] || sizeVariants.normal};
  ${({ type }) => typeVariants[type]};
  ${({ bold }) => {
    if (bold) return `font-weight: 500;`;
  }}
`;

export default StyledText;
