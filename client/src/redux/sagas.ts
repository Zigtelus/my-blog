import { call, put, takeEvery } from 'redux-saga/effects';

import { putData } from './rikmorty/rikmorty.action';


function fetchData() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
}

function* workerLoadData(): any {
  const data = yield call(fetchData)

  yield put(putData(data))
}

export function* watchLoadData() {
  yield takeEvery('LOAD_DATA', workerLoadData)
}