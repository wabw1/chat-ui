import styled from "styled-components";

import ArrowRight from "assets/icons/arrowRight.svg"; //是个url
import Icon from "components/Icon";

//社交部分
const SocialLinks = styled.div`
  // 子元素左右margin:9
  & > * {
    margin: 0 9px;
  }
`;

//联系方式
const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`;

// 相册部分
const AlbumSection = styled.div``;
// 相册标题
const AlbumTitle = styled.div`
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    //颜色 字体normal
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    // 右边箭头
    &::after {
      content: url(${ArrowRight});
      display: inline-block;
      margin-left: 2px;
    }
  }
`;

//相册容器
const Album = styled.div`
  margin-top: 14px;
  justify-self: start; //在父级容器里 行左对齐
  width: 100%;

  display: grid; //本身也是grid容器，三列均分
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
//每张照片
const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover; //自动缩放
`;

// 关闭按钮 Icon
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  //绝对定位
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

// 最外层容器
const StyledProfile = styled.div`
  border: 1px solid ${({ theme }) => theme.greyBox};
  /* box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2); */

  display: ${({ showAll }) => (showAll ? "grid" : "none")};
  align-content: start;
  justify-content: center;
  justify-items: center;

  position: relative; //为了右上角的[X]

  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  /* margin-top: 2vh; */
`;

export default StyledProfile;
export { SocialLinks, ContactSection, AlbumSection, AlbumTitle, Album, Photo };
export { CloseIcon };
