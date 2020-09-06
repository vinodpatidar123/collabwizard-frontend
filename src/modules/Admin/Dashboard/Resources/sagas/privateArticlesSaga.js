import { put, call, takeLatest } from 'redux-saga/effects';

import * as types from '../actions/privateArticlesActionTypes';

import { addResourceService,deleteResourceService, getPrivateArticlesService, searchResourceService, filterResourceService, makeResourcePublicOrPrivateService } from '../../../../../api/resources';

export function* addResourceSaga(payload) {
    try {
        const response = yield call(addResourceService, payload);
        if (response.code >= 200 && response.code < 300) {
            // response  = response.data
            yield put({ type: types.ADD_PRIVATE_ARTICLES_SUCCESS, response : response.data});
          } else {
            throw response;
          }
      } catch(response) {
        yield put({ type: types.ADD_PRIVATE_ARTICLES_ERROR, response})
      }
}

export function* getPrivateArticlesSaga(payload) {
  try {
      const response = yield call(getPrivateArticlesService, payload);
      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.GET_PRIVATE_ARTICLES_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.GET_PRIVATE_ARTICLES_ERROR, response})
    }
}

export function* searchPrivateArticlesSaga(payload) {
  try {
      const response = yield call(searchResourceService, payload);
      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.SEARCH_PRIVATE_ARTICLES_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.SEARCH_PRIVATE_ARTICLES_ERROR, response})
    }
}


export function* filterPrivateArticlesSaga(payload) {
  try {
      const response = yield call(filterResourceService, payload);
      if (response.code >= 200 && response.code < 300) {
        yield put({ type: types.FILTER_PRIVATE_ARTICLES_SUCCESS, response : response.data});
        } else {
          throw response;
        }
    } catch(response) {
        yield put({ type: types.FILTER_PRIVATE_ARTICLES_ERROR, response})
    }
}
  


export function* deleteResourceSaga(payload) {
  try {
      const response = yield call(deleteResourceService, payload);
      if (response.code >= 200 && response.code < 300) {
          
          yield put({ type: types.DELETE_PRIVATE_ARTICLES_SUCCESS,response});
        } else {
          throw response;
        }
    } catch(response) {
      yield put({ type: types.DELETE_PRIVATE_ARTICLES_ERROR, response})
    }
}

export function* makeArticlesPublicOrPrivateSaga(payload) {
  try {
      const response = yield call(makeResourcePublicOrPrivateService, payload);
      if (response.code >= 200 && response.code < 300) {
          
          yield put({ type: types.MAKE_ARTICLES_PUBLIC_OR_PRIVATE_SUCCESS,response});
        } else {
          throw response;
        }
    } catch(response) {
      yield put({ type: types.MAKE_ARTICLES_PUBLIC_OR_PRIVATE_ERROR, response})
    }
}


export default function* watchResource() {
    yield takeLatest(types.ADD_PRIVATE_ARTICLES, addResourceSaga)
    yield takeLatest(types.GET_PRIVATE_ARTICLES, getPrivateArticlesSaga)
    yield takeLatest(types.DELETE_PRIVATE_ARTICLES, deleteResourceSaga)
    yield takeLatest(types.SEARCH_PRIVATE_ARTICLES, searchPrivateArticlesSaga)
    yield takeLatest(types.FILTER_PRIVATE_ARTICLES, filterPrivateArticlesSaga)
    yield takeLatest(types.MAKE_ARTICLES_PUBLIC_OR_PRIVATE, makeArticlesPublicOrPrivateSaga)
}