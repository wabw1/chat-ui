import React from "react";
import PropTypes from "prop-types";

import StyledNoteCard, {
  NoteAbstract,
  NoteImage,
  NoteName,
  Time,
} from "./style";

function NoteCard({ imgSrc, name, abs, time, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={imgSrc} />
      <NoteName> {name} </NoteName>
      <NoteAbstract>{abs}</NoteAbstract>
      <Time>{time}</Time>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
