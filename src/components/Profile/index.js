import React from "react";
import PropTypes from "prop-types";

import StyledProfile, {
  Album,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
  ContactSection,
  Photo,
  SocialLinks,
} from "./style";
import "styled-components/macro"; // 属性用css

import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";

//导入svg Icon
import {
  faGithub,
  faInstagram,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Cross } from "assets/icons/cross.svg";
import Seperator from "components/Seperator";
import Text from "components/Text";

//导入images
import face from "assets/images/face-female-1.jpg"; //引入头像
import p1 from "assets/images/photo1.jpg";
import p2 from "assets/images/photo2.jpg";
import p3 from "assets/images/photo3.jpg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "styled-components/macro";

// 添加 showAll 参数，决定是否显示整个Profile
function Profile({
  onCloseClick,
  showEditBtn,
  showCloseIcon = true,
  onEdit,
  status,
  ...rest
}) {
  // 控制是否显示的状态 (这种方法只能关闭，一次性)
  // const [show, setShow] = useState(showProfile);

  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}

      <Avatar
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2; // 两行一列
        `}
      />

      {/* 编辑按钮 设置点击回调onEdit */}
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2; // 两行一列
            margin-left: 100px;
            align-self: end;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon icon={faPen} fontSize="24px" />
        </Button>
      )}

      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        Cindy
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        深圳市 南山区
      </Paragraph>
      <Paragraph
        size="normal"
        css={`
          margin-bottom: 26px;
        `}
      >
        帮助客户构建网站，并协助社交网上推广 <Emoji label="fire">🔥</Emoji>
      </Paragraph>

      <SocialLinks>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="http://www.weibo.com"
        />
        <Icon.Social icon={faGithub} bgColor="black" />
        <Icon.Social icon={faInstagram} bgColor="#2483C0" />
      </SocialLinks>

      {/* 插入分割线 */}
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />

      <ContactSection>
        <Description label="联系电话"> +86 13048063227</Description>
        <Description label="电子邮件"> cindy@gmail.com</Description>
        <Description label="个人网站"> www.cindy.com</Description>
      </ContactSection>

      <Seperator
        css={`
          margin: 30px 0;
        `}
      />

      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册(31)</Text>
          <a href="www.baidu.com">查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={p1} alt="" />
          <Photo src={p2} alt="" />
          <Photo src={p3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

// 自定义组件 label: {children}
function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}: </Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
