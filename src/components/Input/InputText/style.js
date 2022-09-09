import styled, { css } from "styled-components";

// input加下划线
const InputUnderline = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.greyBox};
  font-size: ${({ theme }) => theme.normal};
  width: 100%;
  background: none; //背景色置空

  & > ::placeholder {
    color: ${({ theme }) => theme.grey5};
  }

  //focus时改变下边框颜色
  :hover,
  :focus {
    border-bottom-color: ${({ theme }) => theme.primaryColor};
  }
`;

const StyledInputText = styled.div``;

export default StyledInputText;
export { InputUnderline };
