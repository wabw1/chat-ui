import React from 'react';
import PropTypes from 'prop-types';

import StyledBlockedList from './style';   


function BlockedList({children, ...rest}) {
	return (
		<StyledBlockedList {...rest}>
			{children}
		</StyledBlockedList>
	)
}


BlockedList.propTypes = {
	children: PropTypes.any
}

export default BlockedList