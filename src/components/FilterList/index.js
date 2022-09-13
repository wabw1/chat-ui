import React from "react";
import PropTypes from "prop-types";

import StyledFilterList from "./style";
import Input from "components/Input";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";

import { ReactComponent as Plus } from "assets/icons/plus.svg";

// options为列表内容，两个label
function FilterList({ children, options, optionLabel, actionLabel, ...rest }) {
  return (
    <StyledFilterList {...rest}>
      {/* 搜索框 */}
      <Input.Search />

      {/* Filter */}
      <Filter style={{ padding: "20px 0" }}>
        {options && (
          <Filter.Filters label={optionLabel}>
            <Select>
              {options.map((opt, id) => (
                <Option key={id}>{opt}</Option>
              ))}
            </Select>
          </Filter.Filters>
        )}

        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width="12" height="12" />
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {/* 列表内容 */}
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  options: PropTypes.array, // 列表
  optionLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default FilterList;
