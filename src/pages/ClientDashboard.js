import React from 'react';

const ClientDashboard = ({ projects }) => {
  return (
    <div className="client-dashboard">
      <h2>Your Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>Status: {project.status}</p>
            <p>Deadline: {project.deadline}</p>
          </li>
        ))}
      </ul>
      {/* Additional sections for notifications, documents, etc. */}
    </div>
  );
};

export default ClientDashboard;