import styled, { css } from "styled-components";

const StyledSeperator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.greyBox};
`;

export default StyledSeperator;
