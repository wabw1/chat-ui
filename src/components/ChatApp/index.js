import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledChatApp, { Content, Nav, SideBar, Drawer } from "./style";
import NavBar from "components/NavBar";
import Conversation from "components/Conversation";
import MessageList from "components/MessageList";
import Profile from "components/Profile";

// 导入路由Route  Routes替代了Switch
import { Route, Routes, useLocation } from "react-router-dom";
// import { Switch } from "react-router";

import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
import BlockedList from "components/BlockedList";
import Settings from "components/Settings";
import VideoCall from "components/VideoCall";

import { animated, useTransition } from "react-spring";

function ChatApp({ ...rest }) {
  // 控制滑动抽屉是否显示
  const [showDrawer, setShowDrawer] = useState(false);
  // 控制视频通话是否显示
  const [showVideo, setShowVideo] = useState(false);

  const loc = useLocation(); //获取当前路径
  const transitions = useTransition(loc, {
    from: {
      opacity: 0,
      transform: "translate3d(-100px,0,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(-100px,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-100px,0,1)",
    },
  });
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>

      <SideBar>
        {/* exact为精确匹配，路径完全匹配才会把Children传进去 */}
        {/* 不用Switch了, v6换成Routes, 起到一样的作用 */}
        {transitions(({ item, props }) => (
          <animated.div style={props}>
            <Routes location={item}>
              <Route path="/" element={<MessageList />} />
              <Route path="/contacts" element={<ContactList />} />
              <Route path="/files" element={<FileList />} />
              <Route path="/notes" element={<NoteList />} />
              <Route path="/more" element={<div></div>} />
              <Route path="/settings/*" element={<EditProfile />} />
            </Routes>
          </animated.div>
        ))}
      </SideBar>

      <Content>
        {/* 显示Video或者其他content二选一 */}
        {showVideo && <VideoCall onHangOffClick={() => setShowVideo(false)} />}
        <Routes>
          {/* 给Conversation设置回调，一路传下去到Avatar组件 */}
          <Route
            path="/*"
            // exact={false}
            element={
              <Conversation
                onAvatarClick={() => setShowDrawer(true)}
                onVideoClick={() => setShowVideo(true)}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="settings/blocked" element={<BlockedList />} />
        </Routes>
      </Content>

      {/* 给Drawer添加一个show属性 showDrawer传进去 */}
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
