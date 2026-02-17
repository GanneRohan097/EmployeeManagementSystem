import React from 'react'
import { User } from "lucide-react";
import DepartmentPieChart from './DepartmentPieChar';

const DeptoverView = ({IT, HR, Finance,sales}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
      
      {/* Left: Pie Chart (takes 2 columns) */}
      <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow w-[70%] mb-4">
        <DepartmentPieChart IT={IT} HR={HR} Finance={Finance} sales={sales} />
      </div>

      {/* Right Side: Stack Cards */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* Recent Hires */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h1 className="text-lg font-semibold mb-4">Recent Hires</h1>

          <div className="flex items-center gap-2 border-b pb-2 mb-3">
            <User className="text-blue-500" />
            <p className="text-gray-600 font-medium">
              David Wilson – Marketing
            </p>
          </div>

          <div className="flex items-center gap-2 border-b pb-2 mb-3">
            <User className="text-green-500" />
            <p className="text-gray-600 font-medium">
              Sarah Lee – Developer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <User className="text-yellow-500" />
            <p className="text-gray-600 font-medium">
              James Brown – Sales
            </p>
          </div>
        </div>

        {/* Leaves Requested */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h1 className="text-lg font-semibold mb-4">Leaves Requested</h1>

          <div className="flex items-center gap-2 border-b pb-2 mb-3">
            <User className="text-red-400" />
            <p className="text-gray-600 font-medium">
              Rohan – 19 Feb 2026
            </p>
          </div>

          <div className="flex items-center gap-2">
            <User className="text-orange-400" />
            <p className="text-gray-600 font-medium">
              Rohan – 20 Jun 2026
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DeptoverView
