import React, { useState } from 'react'
import EditEmployee from './EditEmployee'
const EmployeeList = ({setIT,setFinance,setHR,setSales,setActiveEmp,setTotalemp,employees,setpage}) => {
const Active=employees.filter(e=>e.status==="Active");
const IT=employees.filter(e=>e.department=="IT");
const sales=employees.filter(e=>e.department=="Sales");
const Hr=employees.filter(e=>e.department=="HR");
const Finance=employees.filter(e=>e.department=="Finance");
setIT(IT.length);
setFinance(Finance.length);
setHR(Hr.length);
setSales(sales.length);
setTotalemp(employees.length);
setActiveEmp(Active.length);
const [prop,setprop] = useState(null);

const handleEdit = (emp)=>{
     setprop(emp);
}
const handleDelete = async (emp)=>{
   
     const res = await fetch(`https://emsbackend-sbn1.onrender.com/employees/${emp._id}`,
       {
        method: "DELETE",
        headers:{
          "Content-Type":"application/json",
        },
       }
      
     )
     window.location.reload();
}


  return (
    <div className='mt-4'>
       {prop && <EditEmployee employee={prop}/>}
        <div className='bg-white border border-b-gray-600 flex items-center justify-between p-1'>
            <h1 className='font-semibold ml-4'>Employee List</h1>
            <select className='border border-gray-500 w-[20%]'>
                <option>IT</option>
                <option>sales</option>
                <option>Finance</option>
            </select>
            <input className='border border-gray-400 px-2 hidden md:block' type='text' placeholder='Search by name'></input>
            <button onClick={()=>setpage("AddEmp")} className='bg-green-600 text-white font-semibold p-2 '>Add Employee</button>
        </div>
      <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left'>
                <thead className='bg-slate-100 text-gray-600'>
                    <tr>
                        <th className='px-4 py-3'>Name</th>
                        <th className='px-4 py-3'>Email</th>
                        <th className='px-4 py-3'>Role</th>
                        <th className='px-4 py-3'>Department</th>
                        <th className='px-4 py-3'>Status</th>
                        <th className='px-4 py-3'>Salary</th>
                        <th className='px-4 py-3 text-center hidden md:block'>Actions</th>
                    </tr>
                </thead>
                <tbody>
{employees.map((emp) => (
              <tr key={emp._id} className="border-b bg-white hover:bg-slate-50">
                <td className="px-4 py-3 font-medium">{emp.name}</td>
                <td className="px-4 py-3 text-gray-500">{emp.email}</td>
                <td className="px-4 py-3">{emp.role}</td>
                <td className="px-4 py-3">{emp.department}</td>

                {/* Status Badge */}
                <td className="px-4 py-3 hidden md:block">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-300 text-red-600"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                <td className="px-4 py-3">{emp.salary}</td>

                {/* Actions */}
                <td className="px-4 py-3 text-center">
                  <button 
                  onClick={()=>handleEdit(emp)}
                  className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>
                  <button 
                  onClick={()=>handleDelete(emp)}
                  className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
                </tbody>
          </table>
      </div>
    </div>
  )
}

export default EmployeeList