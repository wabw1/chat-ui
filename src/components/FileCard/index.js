import React from "react";
import PropTypes from "prop-types";

import StyledFileCard, {
  FileIcon,
  FileName,
  FileSize,
  Options,
  Time,
} from "./style";

import Icon from "components/Icon";
// 文件图标
import { ReactComponent as FileExcel } from "assets/icons/fileExcel.svg";
import { ReactComponent as FileImage } from "assets/icons/fileImage.svg";
import { ReactComponent as FilePdf } from "assets/icons/filePdf.svg";
import { ReactComponent as FilePpt } from "assets/icons/filePpt.svg";
import { ReactComponent as FileWord } from "assets/icons/fileWord.svg";
import { ReactComponent as FileZip } from "assets/icons/fileZip.svg";

import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";

import { PopoverContent } from "components/Footer";

// Icon对象
const Icons = {
  excel: FileExcel,
  image: FileImage,
  pdf: FilePdf,
  ppt: FilePpt,
  word: FileWord,
  zip: FileZip,
};

function FileCard({ icon, name, size, time, ...rest }) {
  return (
    <StyledFileCard {...rest}>
      <FileIcon icon={Icons[icon]} />
      <FileName>{name}</FileName>
      <FileSize>{size}</FileSize>
      <Options content={<PopoverContent />}>
        <Icon icon={OptionsIcon} opacity={0.3} />
      </Options>
      <Time>{time}</Time>
    </StyledFileCard>
  );
}

FileCard.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.elementType,
  name: PropTypes.string,
  size: PropTypes.string,
  time: PropTypes.string,
};

export default FileCard;
