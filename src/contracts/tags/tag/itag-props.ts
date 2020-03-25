import { TypeSelectedFunction } from '../../../components/projects-section/tags/ftype-selected';
import { ITag } from "./itag";

export interface ITagProps {
  tag: ITag;
  toggleTagState: TypeSelectedFunction;
}