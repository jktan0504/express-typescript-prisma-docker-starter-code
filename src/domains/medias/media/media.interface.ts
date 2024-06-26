import { IBaseInterface } from "../../../core/interfaces";
import { IMediaFile } from "../media-files";

interface IMedia extends IBaseInterface {
    id?: string // bigserial
    name?: string
    desription?: string
	media_files?: IMediaFile[]
}

export type { IMedia }

