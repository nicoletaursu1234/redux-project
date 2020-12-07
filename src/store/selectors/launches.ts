import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

const getLaunchesArray = (state: RootStateOrAny) => state.feedReducer.launches;
const getHistoryArray = (state: RootStateOrAny) => state.feedReducer.history;
const getLoading = (state: RootStateOrAny) => state.feedReducer.isLoading;
const getSuccessful = (state: RootStateOrAny) => state.feedReducer.successful;

export const getLaunches = createSelector(getLaunchesArray, (res) => res);
export const getHistory = createSelector(getHistoryArray, (res) => res);
export const getLoadingState = createSelector(getLoading, (res) => res);
export const getSuccessfulState = createSelector(getSuccessful, (res) => res);