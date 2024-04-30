import { UUID } from 'crypto';

export interface IBaseInterface {
    activated: boolean;
    created_at: Date;
    updated_at: Date;
    created_by_id: UUID;
    updated_by_id: UUID;
}
