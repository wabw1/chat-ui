import React from 'react';
import PropTypes from 'prop-types';

import StyledInput, { InputContainer, Prefix, Suffix } from './style';
import Icon from 'components/Icon';

// 自定义搜索图标
import { ReactComponent as SearchIcon } from "assets/icons/search.svg"
import { useTheme } from 'styled-components';

// 默认组件Input
function Input({ placeholder = "请输入内容...", prefix, suffix, ...rest }) {
	return (
		<InputContainer>
			{prefix && <Prefix>{prefix}</Prefix>}
			<StyledInput placeholder={placeholder} />
			{suffix && <Suffix>{suffix}</Suffix>}

		</InputContainer>
	)
}

// 自定义组件Search
function Search({ placeholder = "请输入搜索内容", ...rest }) {
	// useTheme hook
	const theme = useTheme();
	return (
		<Input placeholder={placeholder}
			prefix={<Icon icon={SearchIcon} height="18" width="18" color={theme.greyPh} />} 
			{...rest}
	  />
	)
}

Input.Search = Search;   // Search组件作为Input的子组件导出


// 约束
Input.propTypes = {
	placeholder: PropTypes.string,
	prefix: PropTypes.any,
	suffix: PropTypes.any,
}

export default Input;
export { Search };