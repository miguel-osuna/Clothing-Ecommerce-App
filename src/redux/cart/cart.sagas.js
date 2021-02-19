import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

// Worker Sagas

function* clearCartOnSignOut() {
  yield put(clearCart());
}

// Watcher Sagas

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
