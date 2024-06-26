import { IBaseInterface } from "../../../core/interfaces";
import { IMedia } from "../media/media.interface";

interface IMediaFile extends IBaseInterface {
    id?: string // bigserial
	media_id?: string
	media?: IMedia
	resolution?: string
	file_key?: string
	file_type?: string
	url?: string
}

export type { IMediaFile }

