import {
  FETCH_WAZE_ALERT as GET,
  FETCH_WAZE_ALERT_LOADING as LOADING,
  FETCH_WAZE_ALERT_ERROR as ERROR
} from '../actionTypes'

const initialState = {
  data: [],
  isLoading: false,
  isError: false
}

const fetchWazeAlert = (state = {...initialState}, action) => {
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

export default fetchWazeAlert