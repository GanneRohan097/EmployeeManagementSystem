import React, { useState, useEffect } from 'react';

const EditEmployee = ({ employee }) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm(employee);
  }, [employee]);

  if (!form) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/employees/${form._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className='bg-green-200 p-4 grid grid-cols-1 md:grid-cols-3 gap-2'>
        <input
          name="name"
          className='border m-1 rounded px-1'
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          className='border m-1 rounded px-1'
          value={form.email}
          onChange={handleChange}
        />

        <select name="role" className='border m-1 rounded px-1' value={form.role} onChange={handleChange}>
          <option>Software</option>
          <option>HR Manager</option>
          <option>Sales Executive</option>
          <option>Finance Manager</option>
        </select>

        <select name="department" className='border m-1 rounded px-1' value={form.department} onChange={handleChange}>
          <option>IT</option>
          <option>HR</option>
          <option>Sales</option>
          <option>Finance</option>
        </select>

        <select name="status" className='border m-1 rounded px-1' value={form.status} onChange={handleChange}>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <input
          name="salary"
          type="number"
          className='border m-1 rounded px-1'
          value={form.salary}
          onChange={handleChange}
        />

        <button onClick={handleUpdate} className='bg-blue-500 text-white rounded p-2'>
          Done
        </button>
      </div>
    </div>
  );
};

export default EditEmployee;