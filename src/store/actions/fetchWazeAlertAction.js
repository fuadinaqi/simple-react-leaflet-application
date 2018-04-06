import axios from 'axios'
import {
  FETCH_WAZE_ALERT as GET,
  FETCH_WAZE_ALERT_LOADING as LOADING,
  FETCH_WAZE_ALERT_ERROR as ERROR
} from '../actionTypes'

const fetchWazeAlert = () => {
  return dispatch => {
    dispatch(loading())
    axios.get('http://35.187.248.19/feeder/update/vFDlJkLMJ4RKjjqFs5yLO33T3tHvsqF7.json')
      .then(({data}) => {
        console.log(data.alerts)
        dispatch(getWazeAlert(data.alerts))
      })
      .catch(err => dispatch(error()))
  }
}

const loading = () => {
  return {
    type: LOADING
  }
}

const getWazeAlert = (payload) => {
  return {
    type: GET,
    payload
  }
}

const error = () => {
  return {
    type: ERROR
  }
}

export default fetchWazeAlert