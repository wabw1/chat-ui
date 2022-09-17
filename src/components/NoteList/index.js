import React from "react";
import PropTypes from "prop-types";

import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

// 引入spring
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

import notesData from "data/notes";

function NoteList({ ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最先note优先", "笔记名排序"]}
        optionLabel="列表排序"
        actionLabel="添加笔记"
      >
        <Notes>
          {notesData.map((note, idx) => (
            <animated.div key={note.id} style={trailAnimes[idx]}>
              <NoteCard
                key={note.id}
                imgSrc={note.image}
                name={note.title}
                abs={note.excerpt}
                time={note.publishedAt}
              />
            </animated.div>
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
