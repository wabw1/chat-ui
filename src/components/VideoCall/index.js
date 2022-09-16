import React, { useState } from "react";
// import PropTypes from "prop-types";

import StyledVideoCall, { Action, Actions, Minimise, Self } from "./style";
// 导入小窗口的样式组件
import { VideoCallAlert } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVideo,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import videoBg from "assets/images/photo2.jpg"; // 这里以背景图代替视频
import face from "assets/images/face-female-2.jpg";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";

//使用css
import "styled-components/macro";

function VideoCall({ onHangOffClick, ...rest }) {
  // 定义是悬浮窗还是最大化窗口
  const [fullScreen, setFullScreen] = useState(true); //默认全屏
  if (fullScreen) {
    return (
      <StyledVideoCall src={videoBg} {...rest}>
        <Minimise shape="rect" onClick={() => setFullScreen(false)}>
          <FontAwesomeIcon icon={faCompressAlt} />
        </Minimise>

        <Actions>
          <Action>
            <FontAwesomeIcon icon={faMicrophone} />
          </Action>
          <Action type="hangoff" onClick={onHangOffClick}>
            <FontAwesomeIcon icon={faPhoneSlash} />
          </Action>
          <Action>
            <FontAwesomeIcon icon={faVolumeMute} />
          </Action>
        </Actions>

        <Self src={face} size="140px" />
      </StyledVideoCall>
    );
  } else {
    return (
      <VideoCallAlert>
        <Avatar
          src={face}
          css={`
            grid-area: av;
          `}
        />
        <Paragraph
          size="medium"
          css={`
            grid-area: name;
          `}
        >
          正在与Cindy进行视频通话
        </Paragraph>
        <Paragraph
          type="secondary"
          css={`
            grid-area: action;
            cursor: pointer;
            align-self: center;
          `}
          onClick={() => setFullScreen(true)}
        >
          点击切换全屏
        </Paragraph>
        <FontAwesomeIcon
          icon={faVideo}
          css={`
            grid-area: icon;
            justify-self: end;
            font-size: 20px;
            opacity: 0.3;
          `}
        />
      </VideoCallAlert>
    );
  }
}

// VideoCall.propTypes = {

// };

export default VideoCall;
