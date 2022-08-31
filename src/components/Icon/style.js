import styled from 'styled-components'


// 外层容器
const StyledIcon = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	// svg和svg下面的所有
	svg, svg * {
		${({color})=> color? `fill: ${color};`: ""};
		${({opacity})=> opacity? `opacity: ${opacity};`: ""};
	}

`;


export default StyledIcon;



