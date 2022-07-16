import React, { Component } from 'react'
import Highcharts from 'highcharts';


export default class HighChartsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Gases',
                data: [
                    {
                        name: "Chrome",
                        y: 62.74,
                    },
                    {
                        name: "Firefox",
                        y: 10.57,
                    },
                    {
                        name: "Internet Explorer",
                        y: 7.23,
                    },
                    {
                        name: "Safari",
                        y: 5.58,
                    },
                    {
                        name: "Edge",
                        y: 4.02,
                    },
                    {
                        name: "Opera",
                        y: 1.92,
                    },
                    {
                        name: "Other",
                        y: 7.62,
                    }
                ]
            }]
        }
    }

    highChartsRender() {
            Highcharts.chart({
            chart: {
              type: 'pie',
              renderTo: 'atmospheric-composition'
            },
            title: {
              verticalAlign: 'middle',
              floating: true,
              text: 'Earth\'s Atmospheric Composition',
              style: {
                fontSize: '10px',
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                    format: '{point.name}: {point.percentage:.1f} %'
                },
                innerSize: '70%'
              }
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }

  render() {
    return (
        <div id="atmospheric-composition">
        </div>
    )
  }
}
