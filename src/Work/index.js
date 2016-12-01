import React from 'react'
import echarts from 'echarts'

class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
         text: '我的技能展示',
         textStyle:{
           color:'teal'
         },
         left:'center'
      },
      tooltip: {},
      xAxis: {
        data: ["html","css","js","react","node","mangodb"]
      },
      yAxis: {},
      series: [{
        name: '熟练度',
        type: 'bar',
        data: [90, 95, 85, 80, 70, 60],
        color:['blue']

      }]
    });
  }
  render () {
    return(
      <div id='main' style={{width:'100%',heigt:'auto',maxWidth:'600px',margin:'0 auto'}}>
        Work
      </div>
    )
  }
}

export default Work;
