/*import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const RenderBarChart = () => {

    return (

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>

    );
  }*/

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'TeamA', Home: 53, Away: 38},
    { name: 'TeamB', Home: 63, Away: 26},
    { name: 'TeamC', Home: 40, Away: 42},
    { name: 'TeamD', Home: 33, Away: 35},
    { name: 'TeamE', Home: 30, Away: 36},
    { name: 'TeamF', Home: 38, Away: 25},
    { name: 'TeamG', Home: 27, Away: 33},
    { name: 'TeamH', Home: 22, Away: 38},
];

export const RenderBarChart = () => {
    return (
        <BarChart
          width={520}
          height={150}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis label="Points" tick={false}/>
          <Tooltip />
          <Bar dataKey="Home" stackId="a" fill="#000000" barSize={35}/>
          <Bar dataKey="Away" stackId="a" fill="#666666" />
        </BarChart>
    );
  }