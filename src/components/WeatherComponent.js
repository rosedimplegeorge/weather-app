import React, { Component } from 'react';

class WeatherComponent extends Component {
    render() {
        return (
            <div>
                 <h4>{this.props.city}</h4>
                 <h4>{this.props.country}</h4>
                 <h4>{this.props.description}</h4>
                 <h4>{this.props.humiduty}</h4>
                 <h4>{this.props.temperature}</h4>
            </div>
        );
    }
}

export default WeatherComponent;