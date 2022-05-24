import {all, fork} from 'redux-saga/effects';
import common from './common';
import categories from './categories';

export default function* root() {
  yield all([fork(common), fork(categories)]);
}
