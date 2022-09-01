import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './style';   


function Input({children, ...rest}) {
	return (
		<StyledInput {...rest}>
			{children}
		</StyledInput>
	)
}


Input.propTypes = {
	children: PropTypes.any
}

export default Input