import React from "react";
import Avatar from ".";

import face1 from "assets/images/face-female-1.jpg" ; //导入img-src

export default {
  title: "UI组件/Avatar",
  component: Avatar,
};

export const Default  = () =>{
  return <Avatar src={face1} status="online"  />
}

