import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
function App() {
  const[page,setpage]=useState("Home")
const [employees, setEmployees] = useState([
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Software Engineer",
    department: "IT",
    status: "Active",
    salary: "$80,000",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "HR Manager",
    department: "HR",
    status: "Active",
    salary: "$75,000",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michaelb@example.com",
    role: "Sales Executive",
    department: "Sales",
    status: "Inactive",
    salary: "$60,000",
  },
  {
    id: 4,
    name: "Michael",
    email: "michael@example.com",
    role: "Sales Executive",
    department: "IT",
    status: "Active",
    salary: "$60,000",
  }
]);
const addEmployee=(emp)=>{
  setEmployees((prev)=>[
    ...prev,{...emp,id:prev.length+1},
  ]);
}
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar */}
       <div className='bg-blue-800 h-screen p-2'>
             <Sidebar setpage={setpage} />
       </div>
       {/* main content */}
       <div className='w-full overflow-y-auto'>
          {page==="Home" && <Home employees={employees} setpage={setpage}/>}
          {page==="AddEmp" && <AddEmployee addEmployee={addEmployee}/>}
       </div>
    </div>
  );
}

export default App;
