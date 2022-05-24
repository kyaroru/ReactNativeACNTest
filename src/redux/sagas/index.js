import {all, fork} from 'redux-saga/effects';
import common from './common';

export default function* root() {
  yield all([fork(common)]);
}
