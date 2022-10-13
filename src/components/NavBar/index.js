import React from "react";
import PropTypes from "prop-types";

import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style"; // 引入样式组件

import Badge from "components/Badge";
import Avatar from "components/Avatar";

import profileImage from "assets/images/face1.jpg"; //导入头像

// 导入fas图标
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from "@fortawesome/free-solid-svg-icons";

// 导入路由相关模块  使用NavLink替代Link
import { matchPath, NavLink, useLocation } from "react-router-dom";

// import css/macro
import "styled-components/macro";

function NavBar({ navSize = "75px", ...rest }) {
  return (
    <StyledNavBar navSize={navSize} {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/chat-ui" icon={faCommentDots} showBadge={true} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem to="/more" icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

// 里面的MenuItem组件
// icon:svg, active:是否激活, showBadge:
// 添加to参数，使用路由
// 这里使用match的结果(bool) 来控制active， 仍然作为props传给样式组件，但不需要作为参数存在MenuItem里
function MenuItem({ to = "#", icon, showBadge, ...rest }) {
  const loc = useLocation(); //获取当前浏览器的loc对象，loc.pathname为路径
  const curpath = loc.pathname;
  let active = !!matchPath(
    {
      path: to,
      end: true,
    },
    curpath
  );
  // styled-components里 传递属性如果不是参数的话, 前面需要加 $
  return (
    <StyledMenuItem $active={active} {...rest}>
      <NavLink to={to}>
        <Badge show={showBadge}>
          <MenuIcon icon={icon} $active={active} {...rest} />
        </Badge>
      </NavLink>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {
  navSize: PropTypes.string,
  icon: PropTypes.any,
};

export default NavBar;
// 自定义导出：MenuItem ,
export { MenuItem };
