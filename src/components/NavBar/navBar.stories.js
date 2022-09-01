import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import NavBar, { MenuItem } from ".";

import "styled-components/macro";    //引入macro

// 改分区了哈， 页面组件
export default {
	title: "页面组件/NavBar",
	component: NavBar
}


export const Default = () => {
	return (
		<NavBar navSize="100px"/>
	)
}


// 测试通过navSize传参数的NavBar
export const MenuWithNavSize = () => {
	return (
		<NavBar navSize="200px">
			<MenuItem active showBadge icon={faCommentDots} />
		</NavBar>
	)
}
// 测试单个MenuItem
export const Menu = () => {
	return (
		<div css={`
			background-color: ${({ theme }) => theme.darkPurple};
			width: 100px;
		`}>
			<MenuItem active={true} showBadge icon={faCommentDots} />
		</div>
	)
}


// 导航栏测试
