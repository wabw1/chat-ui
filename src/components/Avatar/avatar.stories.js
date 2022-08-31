import Avatar from ".";

import f1 from 'assets/images/face-female-1.jpg';
import f2 from 'assets/images/face-female-2.jpg';
import f3 from 'assets/images/face-female-3.jpg';

// // 导入自定义story.css (这里统一移到previews.js)
// import "story.css"

export default {
	title: "UI 组件/Avatar",
	component: Avatar
}



// 扔出去的组件
export const Default = ()=>{
	return <Avatar src={f1} />
}

export const WithStatus = ()=>{
	return (
		<div className="row-elements">
			<Avatar src={f1} size="48px" status="online" statusIconSize="8px"/>
			<Avatar src={f2} size="56px" status="offline" statusIconSize="8px"/>
			<Avatar src={f3} size="64px" status="offline" statusIconSize="16px"/>
		</div>
	)
}