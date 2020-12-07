import { Actions, IFeedState, ILaunchesAction } from '../types.d';

const initialState: IFeedState = {
  launches: [],
  history: [],
  successful: false,
  isLoading: true,
}

const feedReducer = (state = initialState, action?: ILaunchesAction) => {
  switch (action.type) {
    case Actions.SUCCESS:
      const { payload } = action;

      return {
        launches: [...state.launches, ...payload.launchData],
        history: [...state.history, ...payload.historyData],
        successful: true,
        isLoading: false,
      }

    case Actions.ERROR:
      return {
        ...state,
        successful: false,
        isLoading: false,
      }

    default: return state;
  }
}

export default feedReducer;