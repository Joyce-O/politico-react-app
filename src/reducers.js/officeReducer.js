import * as actions from '../actions/actionTypes';

const initialState = {
  office: null,
  error: null,
  loading: false,
  isAuthenticated: false
};

const officeLoading = state => ({
  ...state,
  error: null,
  loading: true
});

const officeSuccess = (state, action) => ({
  ...state,
  office: action.office,
  loading: false,
  error: null
});

const officeFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OFFICE_LOADING: return officeLoading(state, action);
    case actions.OFFICE_SUCCESS: return officeSuccess(state, action);
    case actions.OFFICE_FAIL: return officeFail(state, action);
    default:
      return state;
  }
};

export default officeReducer;
