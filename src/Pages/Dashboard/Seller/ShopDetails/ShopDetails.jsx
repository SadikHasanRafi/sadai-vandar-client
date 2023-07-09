/* eslint-disable no-unused-vars */
import React from "react";
// import {
//   LineChart,
//   Line,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";

const ShopDetails = () => {
  const { transactions } = useMultipleAPIs()
  console.log(transactions.time)

  const x = transactions.filter((transaction) => console.log(transaction))

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const dataTwo = [
    { name: "Group A", value: 800 },
    { name: "Group B", value: 300 },
  ];

  const COLORS = ["#00BA88", "#ffc154"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex justify-center w-full">
      <div className=" m-10 w-full">
        <div className="grid grid-cols-3 gap-6">
          {/* <div>
          {" "}
          <LineChart
            width={500}
            height={300}
            data={dataOne}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div>
          {" "}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={dataTwo}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value">
                {dataTwo.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div> */}
          <div className="w-full col-span-3 p-7 rounded-lg">
            <p className="text-3xl font-semibold">Welcome to Shop Status 👋</p>
          </div>
          <div className="w-full bg-black bg-opacity-[2.5%]  p-7 rounded-lg">
            <p className="text-xl font-semibold text-black">Today's Sales</p>
            <p className="text-4xl mt-2 font-bold text-success">Tk. 2500</p>
          </div>
          <div className="w-full bg-black bg-opacity-[2.5%]  p-7 rounded-lg">
            {" "}
            <p className="text-xl font-semibold text-black">Today's Profit</p>
            <p className="text-4xl mt-2 font-bold text-success">Tk. 2500</p>
          </div>
          <div className="w-full bg-black bg-opacity-[2.5%] row-span-2 p-7 rounded-lg">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={800}>
              <Pie
                data={dataTwo}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value">
                {dataTwo.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          </div>
          <div className="w-full bg-black bg-opacity-[2.5%]  p-7 rounded-lg col-span-2">
              <p className="text-xl font-semibold text-black">Today's Number of sales</p>
            <AreaChart
              width={900}
              height={300}
              data={data}
              margin={{
                top: 50,
                right: 5,
                left: 5,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
                fill="#00BA88"
                fillOpacity="15%"
                stroke="#00BA88"
                strokeWidth={4}
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
