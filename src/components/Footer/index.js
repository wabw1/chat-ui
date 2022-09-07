import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";

import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";

import Input from "components/Input";
import Icon from "components/Icon";
import Button from "components/Button";
import Emoji from "components/Emoji";
import Popover from "components/Popover";

import { useTheme } from "styled-components";

// props这里是?
function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😬</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="ok">👌🏻</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  );
}

function Footer({ ...rest }) {
  // 无popover时候，smile为灰色 - 通过onVisible和onHide设置回调
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const theme = useTheme();
  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="想说的话..."
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25%" }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.grey}
              />
            </Popover>

            <Icon icon={MicrophoneIcon} />
            <Button size="52px">
              <Icon icon={PlaneIcon} color="white" />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
