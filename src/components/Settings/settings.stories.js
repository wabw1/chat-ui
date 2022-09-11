import Settings from ".";
import { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => {
  return <Settings />;
};

// 单行的某一项settingsItem
export const Item = () => {
  return <SettingsItem label="没有描述项" />;
};
export const ItemWithDescription = () => {
  return <SettingsItem label="有描述的" description="这是一段描述" />;
};
export const WithMenu = () => {
  return <SettingsItem label="显示右边菜单展开符" type="menu" />;
};
