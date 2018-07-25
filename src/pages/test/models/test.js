import * as usersService from '../services/test';

export default {
  namespace: 'test',
  state: {
    a: '',
  },
  reducers: {
    save(state, a) {
      return a.a;
    },
    abc(state,a){
       return a;
    }
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
   
    *cs({a},{ call, put }){
      yield put({
        type: 'abc',
        a
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
