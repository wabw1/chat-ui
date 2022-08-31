import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Badge from ".";

export default {
	title: "UI 组件/Badge",
	component: Badge
}


export const Default = () => {
	return <Badge count={5} />
}

// Badge里面有别的东西，比如fontIcon, variant自动变成dot
export const DotVariant = () => {
	return (
		<Badge show count={3}  >
			<FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px"}} />
		</Badge>
	)
}