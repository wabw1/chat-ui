import styled from 'styled-components';

// 样式包裹的Input
const StyledInput = styled.input`
	height: 40px;
	width: 100%;
	border: none;
	background:none;
	color: ${ ({theme})=> theme.greyInput};
	font-size: ${({theme})=> theme.medium};
	display: block;   //? 为什么这里 
	&::placeholder{
		color: ${({theme}) => theme.greyPh};
	}
`;
// 前缀
const Prefix = styled.div`
	margin-right: 16px;
`;
// 后缀
const Suffix = styled.div`
	margin-left: 16px;
`;


// 最外层 容器
const InputContainer = styled.div`
	display: flex;
	align-items: center;   //垂直居中
	background: ${({theme})=> theme.greyBg};
	border-radius: 24px;
	padding: 0 30px;
`;





export default StyledInput;
export {Prefix,Suffix,InputContainer};



