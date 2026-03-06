"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function ResponseChart({ data }: any) {
  return (
    <LineChart width={500} height={250} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="response" stroke="#8884d8" />
    </LineChart>
  );
}