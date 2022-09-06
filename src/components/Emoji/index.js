import React from 'react';
import PropTypes from 'prop-types';

import StyledEmoji from './style';   


function Emoji({children, ...rest}) {
	return (
		<StyledEmoji {...rest}>
			{children}
		</StyledEmoji>
	)
}


Emoji.propTypes = {
	children: PropTypes.any
}

export default Emoji