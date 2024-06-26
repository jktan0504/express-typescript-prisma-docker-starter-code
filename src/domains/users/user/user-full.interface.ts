import { IUserDetail } from "../user-detail";
import { IUser } from "./user.interface";

interface IFullUser extends IUser, IUserDetail {}

export type { IFullUser };