import React, { useState } from 'react';

const EmployeeDashboard = ({ projects }) => {
  const [workStatus, setWorkStatus] = useState('');
  const [leaveReason, setLeaveReason] = useState('');

  const handleWorkStatusSubmit = (e) => {
    e.preventDefault();
    alert(`Work status updated: ${workStatus}`);
    setWorkStatus('');
  };

  const handleLeaveRequest = (e) => {
    e.preventDefault();
    alert(`Leave requested for reason: ${leaveReason}`);
    setLeaveReason('');
  };

  return (
    <div className="employee-dashboard">
      <h2>Your Assigned Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.deadline}</td>
              <td>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Update Work Status</h3>
      <form onSubmit={handleWorkStatusSubmit}>
        <textarea value={workStatus} onChange={(e) => setWorkStatus(e.target.value)} placeholder="Enter your current work progress"></textarea>
        <button type="submit">Submit Status</button>
      </form>

      <h3>Request Leave</h3>
      <form onSubmit={handleLeaveRequest}>
        <input type="text" value={leaveReason} onChange={(e) => setLeaveReason(e.target.value)} placeholder="Reason for leave" />
        <button type="submit">Submit Request</button>
      </form>
     </div>

  )
  }
  export default EmployeeDashboard;