import { Actions, IFetchAction } from '../types.d';

export const fetchPosts = (limit: number): IFetchAction => {
  return {
    type: Actions.FETCH_LAUNCHES,
    payload: limit,
  }
}