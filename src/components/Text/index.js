import React from 'react';
import PropTypes from 'prop-types';

import StyledText from './style';   


function Text({children, ...rest}) {
	return (
		<StyledText {...rest}>
			{children}
		</StyledText>
	)
}


Text.propTypes = {
	children: PropTypes.any
}

export default Text