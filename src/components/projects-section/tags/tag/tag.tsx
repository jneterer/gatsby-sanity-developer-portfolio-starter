import React, { FunctionComponent } from "react";
import { ITagProps } from "../../../../contracts/tags/tag/itag-props";
import './tag.scss';

const Tag: FunctionComponent<ITagProps> = ({ tag, toggleTagState }) => {
  return <button onClick={(event) => toggleTagState(event, tag)} className={'tag' + (tag.selected ? ' selected' : '')}>{tag.title}</button>
}

export default Tag