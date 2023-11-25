import React from 'react'
import { ResponsiveContainer, BarChart ,Bar,XAxis,Tooltip } from "recharts";
import mileStatics from "../assets/dummy-data/mileStatics";

const MileChart = () => {
  return (
        <ResponsiveContainer width="100%">
             <BarChart data={mileStatics}>
               <XAxis dataKey= 'name' stroke="#2884ff"/>
               <Bar dataKey='mileStats' stroke="#2884ff" fill="#288aff" barSize={30}/>
               <Tooltip cursor= {false}  className="tooltip_style" />
             </BarChart>
          </ResponsiveContainer>
  )
}

export default MileChart;