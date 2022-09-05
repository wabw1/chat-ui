import Button from "components/Button";
import Icon from "components/Icon";
import Option from "components/Option";
import Select from "components/Select";
import Filter from ".";

// 十字icon
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Plus } from "assets/icons/plus.svg";

export default {
  title: "UI组件/Filter",
  component: Filter,
};

export const Default = () => {
  return (
    <Filter>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息</Option>
          <Option>在线好友</Option>
        </Select>
      </Filter.Filters>
      <Filter.Action label="新增会话">
        <Button shape="circle">
          <Icon icon={Plus} width="12" height="12" />
        </Button>
      </Filter.Action>
    </Filter>
  );
};
