import Icon from ".";   // 导入组件Icon
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';  //直接从svg导出一个ReactComponent组件

// fontAwesome导入
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faStickyNote } from "@fortawesome/free-regular-svg-icons";

export default {
	title: "UI组件/Icon",
	component: Icon
}


// 默认导出
export const Default = () => {
	return <Icon icon={SmileIcon} />
}

// 自定义导出
export const CustomColor = () => {
	return <Icon icon={SmileIcon} color="#cccccc" />
}
export const CustomSize = () => {
	return <Icon icon={SmileIcon} height="48" width={48} />
}

// 测试FontAwesome图标
export const FontAwesome = () => {
	return <FontAwesomeIcon icon={faCommentDots} />
}
export const FontAwesomeColorAttr = () => {
	return <FontAwesomeIcon icon={faCommentDots} color="green" />
}
//无效修改，只能用style
// export const FontAwesomeSizeAttr = () => {
// 	return <FontAwesomeIcon icon={faCommentDots} height="48" width="48" />
// }

export const FontAwesomeColorStyle = () => {
	return <FontAwesomeIcon icon={faCommentDots} style={{ color: "red" }} />
}
export const FontAwesomeSizes = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faFolder} style={{ fontSize: "24px" }} />
			<FontAwesomeIcon icon={faStickyNote} style={{ fontSize: "36px", color:"green",opacity:0.7 }} />
			<FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px", color: "grey", opacity:0.5 }} />
		</div>
	)
}