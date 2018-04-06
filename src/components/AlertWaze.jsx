import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWazeAlert }  from '../store/actions'
import { trafficIcon, weatherIcon, roadIcon, accidentIcon } from '../Icon'

import MarkerType from './MarkerType'

class AlertWaze extends Component {
  state = {
    lat: -6.1751,
    lng: 106.8650,
    zoom: 12,
    showJam: true,
    showAccident: true,
    showRoad: true,
    showHazard: true
  }
  
  componentWillMount () {
    this.props.fetchWazeAlert()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const { waze } = this.props
    if (waze.isLoading) {
      return (
        <div>
          <img src='https://zippy.gfycat.com/SimilarPlumpBarasingha.gif' alt='loading bar' />
        </div>
      )
    } else if (waze.isError) {
      return (
        <div>
          <h1>Error . . </h1>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Waze Alerts</h3>
          <fieldset className="form-group">
            <div className="form-check" >
              <label className="form-check-label" style={{color: '#fff'}}>
                <input className="form-check-input" type="checkbox" value="" checked={this.state.showJam} onClick={() => this.setState({showJam: !this.state.showJam})}/>
                Show Traffic
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" style={{color: '#fff'}}>
                <input className="form-check-input" type="checkbox" value="" checked={this.state.showHazard} onClick={() => this.setState({showHazard: !this.state.showHazard})}/>
                Show Weather Hazard
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" style={{color: '#fff'}}>
                <input className="form-check-input" type="checkbox" value="" checked={this.state.showRoad} onClick={() => this.setState({showRoad: !this.state.showRoad})}/>
                Show Road Closed
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" style={{color: '#fff'}}>
                <input className="form-check-input" type="checkbox" value="" checked={this.state.showAccident} onClick={() => this.setState({showAccident: !this.state.showAccident})}/>
                Show Accident
              </label>
            </div>
          </fieldset>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              waze.data.map((mark) => {
                var data = {
                  y: mark.location.y,
                  x: mark.location.x,
                  description: mark.reportDescription,
                  city: mark.city,
                  street: mark.street
                }
                switch (mark.type) {
                  case 'JAM':
                    data = { 
                      ...data,
                      icon: trafficIcon,
                      type: 'Traffic Jam',
                      colorType: '#9f2828',
                    }
                    if (this.state.showJam) {
                      return <MarkerType data={data}/>
                    } else {
                      return ''
                    }
                  case 'WEATHERHAZARD':
                    data = { 
                      ...data,
                      icon: weatherIcon,
                      type: 'Weather Hazard',
                      colorType: '#0594d9',
                    }
                    if (this.state.showHazard) {
                      return <MarkerType data={data}/>
                    } else {
                      return ''
                    }
                  case 'ROAD_CLOSED':
                    data = { 
                      ...data,
                      icon: roadIcon,
                      type: 'Road Closed',
                      colorType: '#000',
                    }
                    if (this.state.showRoad) {
                      return <MarkerType data={data}/>
                    } else {
                      return ''
                    }
                  case 'ACCIDENT':
                    data = { 
                      ...data,
                      icon: accidentIcon,
                      type: 'Accident!',
                      colorType: '#a3a328',
                    }
                    if (this.state.showAccident) {
                      return <MarkerType data={data}/>
                    } else {
                      return ''
                    }
                  default:
                    return ''
                }
              })
              
            }
          </Map>
        </div>
      )
    }
  }
};

const mapStateToProps = state => ({
  waze: state.waze
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWazeAlert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlertWaze)