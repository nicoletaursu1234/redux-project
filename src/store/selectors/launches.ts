import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";
import { ILaunchData } from '../types';

const getLaunchesArray = (state: RootStateOrAny) => state.feedReducer.launches;
const getHistoryArray = (state: RootStateOrAny) => state.feedReducer.history;
const getLoading = (state: RootStateOrAny) => state.feedReducer.isLoading;
const getSuccessful = (state: RootStateOrAny) => state.feedReducer.successful;

const createStatus = (data: ILaunchData) => {
  let launchSuccessful;

  const newData = data.map((item: ILaunchData) => {
    launchSuccessful = item.launch_success ? "SUCCESS" : "FAILURE";
    if (item.launch_success === null) {
      launchSuccessful = "UNKNOWN"
    }

    return { ...item, status: launchSuccessful }
  })

  return newData;
}

export const getLaunches = createSelector(getLaunchesArray, (res) => {
  const data = createStatus(res);

  return data;
});

export const getHistory = createSelector(getHistoryArray, (res) => {
  const data = createStatus(res);

  return data;
});

export const getLoadingState = createSelector(getLoading, (res) => res);
export const getSuccessfulState = createSelector(getSuccessful, (res) => res);