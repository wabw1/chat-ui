import React from "react";
import PropTypes from "prop-types";

import StyledFileList, { Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";
// 引入spring
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

import filesData from "data/files";

function FileList({ ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledFileList {...rest}>
      <FilterList
        options={["最先文件优先", "文件名排序"]}
        optionLabel="列表排序"
        actionLabel="添加文件"
      >
        <Files>
          {filesData.map((file, idx) => (
            <animated.div key={file.id} style={trailAnimes[idx]}>
              <FileCard
                key={file.id}
                name={file.name}
                size={file.size}
                time={file.updatedAt}
                icon={file.type}
              />
            </animated.div>
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
