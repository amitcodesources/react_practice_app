import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options1 = {
    series: [
        {
            name: "Profit",
            data: [100, 200, 30, 100, 50, 30], 
            
        } ]
    };

const options2 = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Browser market shares. January, 2022'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
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
      }
  ],
  };

  const options3 = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Browser market shares. January, 2022'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
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
      }
  ],
  };

  const options4 = {
    chart: {
      type: 'pie'
  },
  title: {
      text: 'Browser market shares. January, 2022'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
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
      }
  ],
  };

  const options5 = {
    chart: {
      type: 'area'
  },
  title: {
      text: 'Browser market shares. January, 2022'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
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
      }
  ],
  };

  const options6 = {
    chart: {
      type: 'line'
  },
  title: {
      text: 'Browser market shares. January, 2022'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
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
      }
  ],
  };

  const options7 = {
    chart: {
      type: 'scatter'
  },
  title: {
      text: 'Browser market shares. January, 2022'
  },
  subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Total percent market share'
      }
  
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
  },
  
  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
      {
          name: "Browsers",
          colorByPoint: true,
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
      }
  ],
  };

export default class HighChartOfficial extends Component {
  render() {
    
    return (
      <div>
            <h1>Highcharts 1</h1>
            <HighchartsReact highcharts={Highcharts} options={options1} />
            <h1>Highcharts 2 Coloumn Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={options2} />
            <h1>Highcharts 3 Bar Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={options3} />
            <h1>Highcharts 4 Pie Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={options4} />
            <h1>Highcharts 5 Area Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={options5} />
            <h1>Highcharts 6 Line Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={options6} />
            <h1>Highcharts 7 Scatter Chart</h1>
            <HighchartsReact highcharts={Highcharts} options={options7} />
      </div>
    )
  }
}
