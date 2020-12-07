import {ILaunchData} from 'store/types.d';

export interface IProps {
  launches?: Array<ILaunchData>;
  history?: Array<ILaunchData>;
}