import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'Headingley', uv: 400, pv: 2400, amt: 2400}];

export default class Linedemo extends React.Component {
  render() {
    return (
      <div>
      <LineChart width={300} height={150} data={data}>
   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
   <XAxis dataKey="name" />
   <YAxis />
   <Tooltip />
 </LineChart>
    </div>
    );
  }
}
