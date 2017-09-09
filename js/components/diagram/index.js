import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

const configcharts = {
  colors: ['#7cb5ec', '#f7a35c', '#90ee7e', 'red', '#7798BF', '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  chart: { type: 'bar' },
  title: { text: 'Stats repositories' },
  legend: { enabled: true, reversed: true },
  xAxis: { },
  yAxis: {
    min: 0,
    title: { text: 'Numerical characteristics' }
    },
  plotOptions: {
    series: { stacking: 'normal' }
    }
  };

export default class Diagram extends Component {
  render() {
    const obj = Object.assign(
      {},
      configcharts,
      { xAxis: {categories: this.props.listSelectedRows.map( item => item.name)} },
      { series: this.props.categoriesY.map( item => { let arr = {}; arr.name=item; arr.data=this.props.listSelectedRows.map( zn => zn[item] ); return arr;} ) }
    );
    return  <ReactHighcharts config={obj}/>
  }
}