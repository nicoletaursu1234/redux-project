import { ILaunchData } from 'store/types.d';

export interface IProps {
  type?: string;
  launch: ILaunchData;
}

export type Status = "SUCCESS" | 'FAILURE' | "UNKNOWN";