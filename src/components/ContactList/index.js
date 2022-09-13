import React from "react";
import PropTypes from "prop-types";

import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";

import face from "assets/images/face-female-4.jpg";

function ContactList({ ...rest }) {
  return (
    <StyledContactList {...rest}>
      <FilterList
        options={["最新添加", "姓名排序"]}
        optionLabel="列表排序"
        actionLabel="添加好友"
      >
        <Contacts>
          {new Array(10).fill(0).map((val, id) => (
            <ContactCard
              key={id}
              avatarSrc={face}
              status="online"
              name={`Name ${id}`}
              intro="this is the introduction"
            />
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
