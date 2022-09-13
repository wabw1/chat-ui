import React from "react";
import PropTypes from "prop-types";

import StyledFileList, { Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";

function FileList({ ...rest }) {
  return (
    <StyledFileList {...rest}>
      <FilterList
        options={["最先文件优先", "文件名排序"]}
        optionLabel="列表排序"
        actionLabel="添加文件"
      >
        <Files>
          {new Array(10).fill(0).map((val, idx) => (
            <FileCard
              key={idx}
              name="Soucecode.zip"
              size="14.7M"
              time="2022年9月10日"
            />
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
