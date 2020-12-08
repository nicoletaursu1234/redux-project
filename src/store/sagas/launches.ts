import { call, put, CallEffect, PutEffect } from 'redux-saga/effects';
import axios from "axios";

import { Actions, IFetchAction } from "../types.d";

axios.defaults.baseURL = "https://api.spacexdata.com/v3";

async function getLaunches(limit: number): Promise<JSON> {
  const { data } = await axios({
    method: "GET",
    url: `/launches/upcoming/?limit=3&offset=${limit}&sort=flight_number&?order=desc`,
  });

  return data;
}

async function getHistory(limit: number): Promise<JSON> {
  const { data } = await axios({
    method: "GET",
    url: `/launches/past/?limit=3&offset=${limit}&sort=flight_number&?order=desc`,
  });
  
  return data;
}

function* fetchLaunches(action: IFetchAction): Iterable<PutEffect<{ type: Actions }> | CallEffect<JSON>> {
  try {
    const launchData = yield call(getLaunches, action.limit);
    const historyData = yield call(getHistory, action.limit);

    yield put({ type: Actions.SUCCESS, payload: { launchData, historyData } });
  } catch (e) {
    yield put({ type: Actions.ERROR });
    console.error(e);
  }
}

export { fetchLaunches }