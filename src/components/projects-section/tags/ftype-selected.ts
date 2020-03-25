import { MouseEvent } from "react";
import { ITag } from "../../../contracts/tags/tag/itag";

export type TypeSelectedFunction = (event: MouseEvent, tag: ITag) => void;
