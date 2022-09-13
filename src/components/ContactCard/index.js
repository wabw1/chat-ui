import React from 'react';
import PropTypes from 'prop-types';

import StyledContactCard from './style';   


function ContactCard({children, ...rest}) {
	return (
		<StyledContactCard {...rest}>
			{children}
		</StyledContactCard>
	)
}


ContactCard.propTypes = {
	children: PropTypes.any
}

export default ContactCard