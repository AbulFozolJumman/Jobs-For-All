import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts";

const data = [
  {
    subject: "Assignment-1",
    Marks: 60,
    fullMark: 60
  },
  {
    subject: "Assignment-2",
    Marks: 60,
    fullMark: 60
  },
  {
    subject: "Assignment-3",
    Marks: 60,
    fullMark: 60
  },
  {
    subject: "Assignment-4",
    Marks: 60,
    fullMark: 60
  },
  {
    subject: "Assignment-5",
    Marks: 58,
    fullMark: 60
  },
  {
    subject: "Assignment-6",
    Marks: 58,
    fullMark: 60
  },
  {
    subject: "Assignment-7",
    Marks: 60,
    fullMark: 60
  },
  {
    subject: "Assignment-8",
    Marks: 58,
    fullMark: 60
  }
];
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };


export default function Statistics() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={80}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Tooltip content={<CustomTooltip />} />
      <Radar
        name="Jumman"
        dataKey="Marks"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.5}
      />
    </RadarChart>
  );
}
