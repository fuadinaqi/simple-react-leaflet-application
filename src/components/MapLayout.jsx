import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'

import { fetchReports } from '../store/actions'

import ReportMarker from './ReportMarker'

class MapLayout extends Component {
  state = {
    lat: -6.1751,
    lng: 106.8650,
    zoom: 12,
    isShow: true
  }

  componentWillMount () {
    this.props.fetchReports()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const { report } = this.props
    if (report.isLoading) {
      return (
        <div>
          <img src='https://zippy.gfycat.com/SimilarPlumpBarasingha.gif' alt='loading bar' />
        </div>
      )
    } else if (report.isError) {
      return (
        <div>
          <h1>Error . . </h1>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Qlue Reports</h3>
          <button style={{margin: 10}} type="button" className="btn btn-secondary" onClick={() => this.setState({isShow: !this.state.isShow})} >Show / Hide Reports</button>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ReportMarker report={report} isShow={this.state.isShow} />
          </Map>
        </div>
      )
    }
  }
};

const mapStateToProps = state => ({
  report: state.report
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchReports
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MapLayout)
