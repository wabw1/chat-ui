import React from "react";
import PropTypes from "prop-types";

import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";

// 引入spring
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

// 导入数据
import contactsData from "data/contacts";

function ContactList({ ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledContactList {...rest}>
      <FilterList
        options={["最新添加", "姓名排序"]}
        optionLabel="列表排序"
        actionLabel="添加好友"
      >
        <Contacts>
          {contactsData.map((contact, id) => (
            <animated.div key={contact.id} style={trailAnimes[id]}>
              <ContactCard
                key={contact.id}
                contact={contact} //整个对象传进去，下层解构
              />
            </animated.div>
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
