import React, { FunctionComponent } from "react";
import { ITagProps } from "../../../../contracts/tags/tag/itag-props";
import './tag.scss';

const Tag: FunctionComponent<ITagProps> = ({ tag, toggleTagState }) => {
  return toggleTagState ?
  <button onClick={(event) => toggleTagState(event, tag)} className={'tag can-select' + (tag.selected ? ' selected' : '')}>{tag.title}</button>
  :
  <button className="tag">{tag.title}</button>
}

export default Tag