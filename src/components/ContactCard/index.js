import React from "react";
import PropTypes from "prop-types";

import StyledContactCard, { Intro, Name } from "./style";
import Avatar from "components/Avatar";

function ContactCard({ children, avatarSrc, status, name, intro, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={avatarSrc} status={status} />
      <Name>{name}</Name>
      <Intro>{intro}</Intro>
      {children}
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
