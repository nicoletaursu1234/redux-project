import { takeLatest } from 'redux-saga/effects';

import { Actions } from '../types.d';
import { fetchLaunches } from './launches';

function* Saga() {
  yield takeLatest(Actions.FETCH_LAUNCHES, fetchLaunches);
}

export default Saga;