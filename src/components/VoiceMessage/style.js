import StyledButton from "components/Button/style";
import StyledIcon from "components/Icon/style";
import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

// 变体
const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;
      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }
    & > ${StyledIcon} path {
      fill: white;
    }
    & > ${StyledText} {
      color: white;
    }
  `,
};

const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */

  /* background-color: white;
  border-radius: 100px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); */

  & > *:first-child {
    flex-shrink: 0;
  }
  & > *:not(:first-child) {
    margin-left: 16px;
  }

  // 变体
  ${({ type }) => type && typeVariants[type]}
`;

export default StyledVoiceMessage;
