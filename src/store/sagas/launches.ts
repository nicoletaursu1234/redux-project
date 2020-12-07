import { call, put, CallEffect, PutEffect } from 'redux-saga/effects';
import axios from "axios";

import { Actions, IFetchAction, ILaunchData } from "../types.d";

axios.defaults.baseURL = "https://api.spacexdata.com/v3";

async function getLaunches(limit: number): Promise<JSON> {
  const response = await axios({
    method: "GET",
    url: `/launches/upcoming/?limit=3&offset=${limit}&sort=flight_number&?order=desc`,
  }).then(res => res.data);

  return response;
}

async function getHistory(limit: number): Promise<JSON> {
  const response = await axios({
    method: "GET",
    url: `/launches/past/?limit=3&offset=${limit}&sort=flight_number&?order=desc`,
  }).then(res => res.data);

  return response;
}

function* fetchLaunches(action: IFetchAction): Iterable<PutEffect<{ type: Actions }> | CallEffect<JSON>> {
  try {
    const launchData = yield call(getLaunches, action.payload);
    const historyData = yield call(getHistory, action.payload);

    yield put({ type: Actions.SUCCESS, payload: { launchData, historyData } });
  } catch (e) {
    yield put({ type: Actions.ERROR });
    console.error(e);
  }
}

export { fetchLaunches }