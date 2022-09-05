import styled, { css } from "styled-components";

// import Text from 'components/Text';
import StyledText from "components/Text/style"; //复用Text组件（的样式）

const StyledParagraph = styled(StyledText)`
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `};

  ${({ showFirstletter }) =>
    showFirstletter &&
    css`
      &::first-letter {
        color: orange;
      }
    `};
`; // 里面写Paragraph独有样式

export default StyledParagraph;
