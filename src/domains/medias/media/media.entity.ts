

import { BaseEntity } from '../../../core/domain/base.entity';
import { IMediaFile } from '../media-files';
import { IMedia } from './media.interface';

class MediaDomain extends BaseEntity implements IMedia {
    readonly name: string;
	readonly descripion: string;
	readonly media_files: IMediaFile[]
	
	constructor(name: string, descripion: string, media_files: IMediaFile[]) {
		super();

		this.name = name;
		this.descripion = descripion;
		this.media_files = media_files;
	}
}

export { MediaDomain };
