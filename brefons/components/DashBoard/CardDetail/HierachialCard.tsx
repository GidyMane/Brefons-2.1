import React from 'react';
import MemberCard from './MemberCard'; // Import sub-component

export const HierarchicalCard = ({ data }) => {
  console.log(data)
  const { id, title, members } = data;

  return (
    <div className="card shadow-md rounded-lg"> {/* Basic card styling */}
      <div className="card-header p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">{title}</h2>
        <span className="text-gray-600">ID: {id}</span>
      </div>
      <div className="card-body px-4 py-2"> {/* Content area */}
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};