import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: '02-03', PlayerA: 25, PlayerB: 26},
    { name: '03-04', PlayerA: 29, PlayerB: 27},
    { name: '04-05', PlayerA: 33, PlayerB: 27},
    { name: '05-06', PlayerA: 33, PlayerB: 41},
    { name: '06-07', PlayerA: 34, PlayerB: 47},
    { name: '07-08', PlayerA: 34, PlayerB: 45},
    { name: '08-09', PlayerA: 33, PlayerB: 50},
    { name: '09-10', PlayerA: 29, PlayerB: 41},
    { name: '10-11', PlayerA: 34, PlayerB: 37},
    { name: '11-12', PlayerA: 38, PlayerB: 52},
    { name: '12-13', PlayerA: 34, PlayerB: 44},
    { name: '13-14', PlayerA: 30, PlayerB: 42},
    { name: '14-15', PlayerA: 35, PlayerB: 42},
    { name: '15-16', PlayerA: 36, PlayerB: 39},
    { name: '16-17', PlayerA: 29, PlayerB: 28},
    { name: '17-18', PlayerA: 27, PlayerB: 37},
    { name: '18-19', PlayerA: 31, PlayerB: 28},
    { name: '19-20', PlayerA: 33, PlayerB: 39},
    { name: '20-21', PlayerA: 33, PlayerB: 25}
];
              
export const RenderLineChart = () => {
    return (
        <LineChart width={520} height={150} data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="PlayerA" stroke="#666666" dot={false}/>
            <Line type="monotone" dataKey="PlayerB" stroke="#000000" dot={false}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis label="Rating" tick={false}/>
            <Tooltip />
        </LineChart>
    )
}