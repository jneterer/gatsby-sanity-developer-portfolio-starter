import React, { FunctionComponent, MouseEvent } from "react";
import { ITagsProps } from './itags-props';
import { ITag } from "./tag/itag";
import Tag from "./tag/tag";
import './tags.scss';

const Tags: FunctionComponent<ITagsProps> = ({ tags, toggleTagState }) => {
  return <div className="tags-container">
    {
      tags.map((tag: ITag) => {
        return <Tag tag={tag} key={tag._id} toggleTagState={(event: MouseEvent, tag: ITag) => toggleTagState(event, tag)} />
      })
    }
  </div>;
}

export default Tags