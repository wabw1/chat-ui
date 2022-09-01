import React from 'react';
import PropTypes, { string } from 'prop-types';

import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from './style';    // 引入样式组件

import Badge from 'components/Badge';
import Avatar from 'components/Avatar';

import profileImage from 'assets/images/face-female-1.jpg'; //导入头像

// 导入fas图标
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from "@fortawesome/free-solid-svg-icons";

function NavBar({ navSize, ...rest }) {
	return (
		<StyledNavBar navSize={navSize} {...rest}>
			<Avatar src={profileImage} status="online" />
			<MenuItems>
				<MenuItem icon={faCommentDots} active showBadge />
				<MenuItem icon={faUsers} />
				<MenuItem icon={faFolder} />
				<MenuItem icon={faStickyNote} />
				<MenuItem icon={faEllipsisH} />
				<MenuItem icon={faCog} css= {`align-self:end`} />
			</MenuItems>


		</StyledNavBar>
	)
}

// 里面的MenuItem组件
// icon:svg, active:是否激活, showBadge:是否显示红点
function MenuItem({ icon, active, showBadge, ...rest }) {
	return (
		<StyledMenuItem active={active} {...rest}>
			<a href='#'>
				<Badge show={showBadge}>
					<MenuIcon icon={icon} active={active}  {...rest} />
				</Badge>
			</a>
		</StyledMenuItem>
	)
}



NavBar.propTypes = {
	navSize: PropTypes.string,
}

export default NavBar;
// 自定义导出：MenuItem , 
export { MenuItem };