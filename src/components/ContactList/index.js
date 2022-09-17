import React from "react";
import PropTypes from "prop-types";

import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";

import face from "assets/images/face-female-2.jpg";
// 引入spring
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

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
          {new Array(10).fill(0).map((val, id) => (
            <animated.div key={id} style={trailAnimes[id]}>
              <ContactCard
                key={id}
                avatarSrc={face}
                status="online"
                name={`联系人 ${id}`}
                intro="this is the introduction"
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
