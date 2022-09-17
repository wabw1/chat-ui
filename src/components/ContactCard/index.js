import React from "react";
import PropTypes from "prop-types";

import StyledContactCard, { Intro, Name } from "./style";
import Avatar from "components/Avatar";

// 参数替换成contact对象，解构
function ContactCard({ contact, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={contact.avatar} status={contact.status} />
      <Name>{contact.name}</Name>
      <Intro>{contact.intro}</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
