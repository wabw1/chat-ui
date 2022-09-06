import React from 'react';
import PropTypes from 'prop-types';

import StyledTitleBar from './style';   


function TitleBar({children, ...rest}) {
	return (
		<StyledTitleBar {...rest}>
			{children}
		</StyledTitleBar>
	)
}


TitleBar.propTypes = {
	children: PropTypes.any
}

export default TitleBar