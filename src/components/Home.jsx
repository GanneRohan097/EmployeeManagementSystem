import React, { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { Users, CheckCircle, Building2, CalendarDays } from "lucide-react";
import DeptoverView from "./DeptoverView";
import EmployeeList from "./EmployeeList";

const Home = ({employees,setpage}) => {
  const[Totalemp,setTotalemp] = useState(0)
  const[ActiveEmp,setActiveEmp] = useState(0)
  const[TotalDept,setTotalDept] = useState(4)
  const[RecentHires,setRecentHires] = useState(0)
  const[IT,setIT] = useState(0)
  const[sales,setSales] = useState(0)
  const[HR,setHR] = useState(0)
  const[Finance,setFinance] = useState(0)
  return (
    <div className="w-full h-full p-2 overflow-y-scroll">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <h1 className="hidden md:block text-2xl text-blue-600 font-semibold">
          Employee Management System
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search employees..."
              className="w-40 md:w-80 pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <Bell className="text-xl cursor-pointer text-gray-600 hover:text-blue-600" />
          <User className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        
        {/* Card 1 */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow min-h-[90px]">
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <h1 className="text-sm font-medium whitespace-nowrap">
                Total Employees
              </h1>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">{Totalemp}</h1>
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow min-h-[90px]">
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              <h1 className="text-sm font-medium whitespace-nowrap">
                Active Employees
              </h1>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">{ActiveEmp}</h1>
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow min-h-[90px]">
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <h1 className="text-sm font-medium whitespace-nowrap">
                Departments
              </h1>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">{TotalDept}</h1>
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <Building2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow min-h-[90px]">
          <div>
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              <h1 className="text-sm font-medium whitespace-nowrap">
                Recent Hires
              </h1>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">{RecentHires}</h1>
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-400 rounded-full flex items-center justify-center">
            <User className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>
        <DeptoverView IT={IT} HR={HR} Finance={Finance} sales={sales}></DeptoverView>
        <EmployeeList setIT={setIT} setFinance={setFinance} setHR={setHR} setSales={setSales} setActiveEmp={setActiveEmp} setTotalemp={setTotalemp} employees={employees} setpage={setpage}></EmployeeList>
    </div>
  );
};

export default Home;
