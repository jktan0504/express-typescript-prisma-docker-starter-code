import { Request } from 'express';
import { IUser } from '../../domains/users';

export interface AuthenticatedRequest extends Request {
  	user?: IUser;
	user_id?: string;
}