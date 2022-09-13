import React from 'react';
import PropTypes from 'prop-types';

import StyledFilterList from './style';   


function FilterList({children, ...rest}) {
	return (
		<StyledFilterList {...rest}>
			{children}
		</StyledFilterList>
	)
}


FilterList.propTypes = {
	children: PropTypes.any
}

export default FilterList