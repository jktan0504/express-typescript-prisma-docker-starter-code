

import { BaseEntity } from '../../../core/domain/base.entity';
import { IMedia } from '../media';
import { IMediaFile } from './media-files.interface';

class MediaFileDomain extends BaseEntity implements IMediaFile {
    readonly media_id: string;
	readonly media: IMedia;
	readonly resolution: string;
	readonly file_key: string;
	readonly file_type: string;
	readonly url: string;

	constructor(media_id: string, media: IMedia, resolution: string, file_key: string, file_type: string, url: string) {
		super();

		this.media_id = media_id
		this.media = media
		this.resolution = resolution
		this.file_key = file_key
		this.file_type = file_type
		this.url = url

	}
}

export { MediaFileDomain };
