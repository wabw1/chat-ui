import React from "react";
import PropTypes from "prop-types";

import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

import p from "assets/images/photo1.jpg";

function NoteList({ ...rest }) {
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最先note优先", "笔记名排序"]}
        optionLabel="列表排序"
        actionLabel="添加笔记"
      >
        <Notes>
          {new Array(10).fill(0).map((val, idx) => (
            <NoteCard
              key={idx}
              imgSrc={p}
              name="笔记标题"
              abs="这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记这是一篇笔记"
              time="上午12:04"
            />
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
