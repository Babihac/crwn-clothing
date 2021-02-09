import { takeLatest, call, put, all } from "redux-saga/effects";
import shopActionTypes from "./shop.types";
import {
  fetchCollectionSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
  // collectionRef
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   })
  //   .catch((error) => console.log(5));
}

export function* fetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
