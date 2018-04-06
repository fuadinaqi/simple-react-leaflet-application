import { combineReducers } from 'redux'
import report from './fetchUserReportReducers'
import waze from './fetchWazeAlertReducers'

export default combineReducers({
  report,
  waze
})