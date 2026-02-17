import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#facc15", "#ef4444"];

const DepartmentPieChart = ({IT, HR, Finance,sales}) => {
  const data = [
  { name: "IT", value: IT },
  { name: "HR", value: HR },
  { name: "Sales", value: sales },
  { name: "Finance", value: Finance },
];
  return (
    <div className=" p-4 rounded-xl h-[300px]">
      <h2 className="text-lg font-semibold mb-2">Department Overview</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


export default DepartmentPieChart;
