import Input from ".";

// 导入svg为ReactComponent
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg"
import Icon from "components/Icon";

export default {
	title: "UI组件/Input",
	component: Input
}


export const Default = () => {
	return <Input />
}

// 测试Search组件
export const Search = () => {
	return <Input.Search />
}

// 测试前后缀都有的组件
export const WithAffix = () => {
	return (
		<div>
			<Input
				prefix={<Icon icon={ClipIcon} color="#cccccc" opacity={0.8}/>}
				suffix={<Icon icon={SmileIcon} color="#cccccc" opacity={0.8} />}
			/>
			<Input
				prefix={<Icon icon={ClipIcon} color="green" />}
				suffix={<Icon icon={SmileIcon} color="green" />}
			/>
		</div>
	)
}