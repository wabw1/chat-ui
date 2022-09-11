import React from "react";
import PropTypes from "prop-types";

import StyledEditProfile, {
  GenderAndSpace,
  GroupTitle,
  SelectGroup,
  StyledIconInput,
} from "./style";
import { useState } from "react";
import Profile from "components/Profile";
import Avatar from "components/Avatar";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import face from "assets/images/face-female-2.jpg";

import "styled-components/macro"; // 属性用css
import InputText from "components/Input/InputText";
import Select from "components/Select";
import LabelContainer from "components/LabelContainer";
import Radio from "components/Radio";
import Option from "components/Option";
import Icon from "components/Icon";
import Input from "components/Input";
import {
  faWeibo,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
  // 设置一个状态：是否显示editBtn
  const [isEdit, setIsEdit] = useState(false); //默认非编辑状态
  console.log(isEdit);

  // 非编辑状态 = 默认状态（显示EditBtn, 不显示closeIcon)
  if (!isEdit)
    return (
      <Profile
        showEditBtn
        showCloseIcon={false}
        onEdit={() => setIsEdit(true)}
      />
    ); // 若isEdit为false,直接返回<Profile/>

  // 编辑状态
  return (
    <StyledEditProfile {...rest}>
      <Avatar
        src={face}
        size="160px"
        css={`
          grid-area: 1/1/1/2; // 第一行 第一列
          justify-self: center;
          margin-bottom: 12px;
        `}
      />
      <Button
        size="52px"
        onClick={() => setIsEdit(false)}
        css={`
          grid-area: 1/1/3/2; //前两行 第一列
          align-self: end;
          justify-self: end;
        `}
      >
        <FontAwesomeIcon icon={faCheck} />
      </Button>

      <GroupTitle>基本信息</GroupTitle>
      <InputText label="昵称" />

      <GenderAndSpace>
        <Radio.Group label="性别">
          <Radio name="sex">男</Radio>
          <Radio name="sex">女</Radio>
        </Radio.Group>
        <LabelContainer label="地区">
          <SelectGroup>
            <Select type="form">
              <Option>省份</Option>
            </Select>
            <Select type="form">
              <Option>城市</Option>
            </Select>
            <Select type="form">
              <Option>地区</Option>
            </Select>
          </SelectGroup>
        </LabelContainer>
      </GenderAndSpace>

      <InputText label="个性签名" />

      <GroupTitle>联系信息</GroupTitle>
      <InputText label="联系电话" />
      <InputText label="电子邮箱" />
      <InputText label="个人网站" />

      <GroupTitle>社交信息</GroupTitle>
      <IconInput icon={faWeibo} bgColor="#F06767" href="http://www.weibo.com" />
      <IconInput icon={faGithub} bgColor="black" />
      <IconInput icon={faInstagram} bgColor="#2483C0" />
    </StyledEditProfile>
  );
}

// 自定义组件 IconInput
function IconInput({ icon, bgColor, href, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Social icon={icon} bgColor={bgColor} href={href} />
      <Input.Text />
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
