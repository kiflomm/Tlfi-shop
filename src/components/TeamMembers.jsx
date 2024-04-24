import React from 'react';

const TeamMembers = () => {
  // Dummy data for team members
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      email: 'john@example.com',
      phone: '+1234567890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      email: 'jane@example.com',
      phone: '+0987654321',
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
            <p className="text-sm text-gray-600 mb-2">Email: {member.email}</p>
            <p className="text-sm text-gray-600">Phone: {member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
