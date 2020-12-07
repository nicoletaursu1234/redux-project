import { Actions, IFetchAction, ILaunchData } from '../types.d';

export const fetchPosts = (limit: number): IFetchAction => {
  return {
    type: Actions.FETCH_LAUNCHES,
    payload: limit,
  }
}