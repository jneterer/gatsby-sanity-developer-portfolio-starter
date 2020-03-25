import { TypeSelectedFunction } from '../../components/projects-section/tags/ftype-selected';
import { ITag } from "./tag/itag";

export interface ITagsProps {
  tags: ITag[];
  toggleTagState: TypeSelectedFunction;
}