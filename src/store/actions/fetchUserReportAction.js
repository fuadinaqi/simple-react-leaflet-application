import axios from 'axios'
import {
  FETCH_REPORT as GET,
  FETCH_REPORT_LOADING as LOADING,
  FETCH_REPORT_ERROR as ERROR
} from '../actionTypes'

const fetchReports = () => {
  return dispatch => {
    dispatch(loading())
    var headers = {
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicWx1ZWluIiwiaWF0IjoxNDk0Mzk5Njg1fQ.mG5wmoCwmchufTPloxI7AjZaeM_bwcpCEJpyUnCDrmk'
      }
    }
    axios.get('http://ext.qlue.id/example/top_report', headers)
      .then(({data}) => {
        dispatch(getReport(data))
      })
      .catch(err => dispatch(error()))
  }
}

const loading = () => {
  return {
    type: LOADING
  }
}

const getReport = (payload) => {
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

export default fetchReports