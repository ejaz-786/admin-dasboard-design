import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const SalesChart = () => {
  const data = [
    { name: "Electronics", value: 35, color: "#3b82f6" },
    { name: "Clothing", value: 40, color: "#8b5cf6" },
    { name: "Books", value: 15, color: "#10b981" },
    { name: "Other", value: 10, color: "#f59e0b" },
  ];
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 ">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white ">
          Sales by category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Production Distrubution
        </p>
      </div>
      <div className="h-50">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#bfdee3",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px black",
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {data.map((item, index) => {
          return (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex items-centre space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {item.name}
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-white">
                {item.value}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesChart;
