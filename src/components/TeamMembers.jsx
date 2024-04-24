import React from 'react'; 
const TeamMembers = () => { 
  const teamMembers = [
    {
      id: 1,
      image:{src:"https://i.postimg.cc/YSdMcP6n/Tesfahannes-Tesfay.jpg",alt:'this is alt'},
      name: 'Yohannes Tesfay',
      role: 'COE and Founder',
      email: 'tesfsh@example.com',
      phone: '+2518923923',
    },
    {
      id: 2,
      image:{src:"https://i.postimg.cc/MKgY5Zgt/Salem-Blue.png",alt:'this is alt'},
      name: 'Selam hayelom',
      role: 'HR officer',
      email: 'selam234@example.com',
      phone: '+0987654321',
    }, 
    {
        id: 1,
        image:{src:"https://i.postimg.cc/fyLv2Vwq/Geleta-Kedir-233x300.jpg",alt:'this is alt'},
        name: 'Adane Haile',
        role: 'Sales Man',
        email: 'john@example.com',
        phone: '+1234567890',
    },
    {
        id: 1,
        image:{src:"https://i.postimg.cc/wBpQKfqm/Elias-Meseret.webp",alt:'this is alt'},
        name: 'Elias meseret',
        role: 'Distribution Officer',
        email: 'eliasmeseret@example.com',
        phone: '+2519838382322',
    },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={member.image.src} alt={member.image.alt} className='border-2 mx-auto w-[300px] h-[300px] object-fill'/>
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