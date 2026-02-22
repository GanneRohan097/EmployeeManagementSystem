import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import AddEmployee from './components/AddEmployee';

function App() {
  const [page, setpage] = useState("Home");
  const [employees, setEmployees] = useState([]);

  // Fetch employees from backend
  const fetchEmployees = async () => {
    try {
      const res = await fetch("https://emsbackend-sbn1.onrender.com/employees");
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error("Error in fetching employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <div className='bg-blue-800 h-screen p-2'>
        <Sidebar setpage={setpage} />
      </div>

      {/* main content */}
      <div className='w-full overflow-y-auto'>
        {page === "Home" && (
          <Home employees={employees} setpage={setpage} />
        )}

        {page === "AddEmp" && (
          <AddEmployee fetchEmployees={fetchEmployees} />
        )}
      </div>
    </div>
  );
}

export default App;