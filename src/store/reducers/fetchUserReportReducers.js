import {
  FETCH_REPORT as GET,
  FETCH_REPORT_LOADING as LOADING,
  FETCH_REPORT_ERROR as ERROR
} from '../actionTypes'

const initialState = {
  data: [],
  isLoading: false,
  isError: false
}

const fetchReport = (state = {...initialState}, action) => {
  switch (action.type) {
    case LOADING:
      return ({
        ...state,
        isLoading: true,
        isError: false
      })
    case GET:
      return ({
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      })
    case ERROR:
      return ({
        ...state,
        isLoading: false,
        isError: true
      })
    default:
      return state
  }
}

export default fetchReport