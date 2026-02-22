import React, { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  Building2,
  CheckCircle,
  DollarSign,
} from "lucide-react";

const AddEmployee = ({ fetchEmployees }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("Software");
  const [Dept, setDept] = useState("IT");
  const [Status, setStatus] = useState("Active");
  const [Salary, setSalary] = useState("");

  const handleSubmmit = async () => {
    const newEmp = {
      name: Name,
      email: Email,
      role: Role,
      department: Dept,
      status: Status,
      salary: Number(Salary),
    };

    if (Name && Email && Role && Dept && Status && Salary) {
      try {
        const res = await fetch(
          "https://emsbackend-sbn1.onrender.com/employees/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newEmp),
          }
        );

        const data = await res.json();
        console.log("Saved:", data);

        // Re-fetch employees from DB (no blank row issue)
        await fetchEmployees();
      } catch (err) {
        console.error("Error:", err);
      }
    }

    setName("");
    setEmail("");
    setRole("Software");
    setDept("IT");
    setStatus("Active");
    setSalary("");
  };

  return (
    <div>
      <div className="bg-white m-8 p-6 rounded-xl shadow">
        <h1 className="font-semibold text-2xl border-b pb-4 mb-6">
          Add New Employee
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
              <User className="w-4 h-4 text-blue-500" />
              Full Name
            </label>
            <input
              value={Name}
              className="border px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter Employee Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
              <Mail className="w-4 h-4 text-green-500" />
              Email
            </label>
            <input
              value={Email}
              className="border px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Enter Employee Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
              <Briefcase className="w-4 h-4 text-yellow-500" />
              Role
            </label>
            <select
              value={Role}
              onChange={(e) => setRole(e.target.value)}
              className="border px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Software</option>
              <option>HR Manager</option>
              <option>Sales Executive</option>
              <option>Finance Manager</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
              <Building2 className="w-4 h-4 text-indigo-500" />
              Department
            </label>
            <select
              value={Dept}
              onChange={(e) => setDept(e.target.value)}
              className="border px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>IT</option>
              <option>HR</option>
              <option>Sales</option>
              <option>Finance</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Status
            </label>
            <select
              value={Status}
              onChange={(e) => setStatus(e.target.value)}
              className="border px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-1">
              <DollarSign className="w-4 h-4 text-rose-500" />
              Salary
            </label>
            <input
              value={Salary}
              className="border px-3 py-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              placeholder="Enter Salary"
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmmit}
            className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;