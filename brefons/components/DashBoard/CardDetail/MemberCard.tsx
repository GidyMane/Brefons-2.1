import React from 'react';
import SubMemberCard from './SubMemberCard'; // Import sub-component (optional)

const MemberCard = ({ member }) => {
  const { id, title, unit, baseline, midtarget, endtarget, frequency, mov, agency, members } = member;

  return (
    <div className="mb-4 border rounded-lg p-4"> {/* Member section styling */}
      <h3 className="text-base font-medium">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>Unit: {unit}</div>
        <div>Baseline: {baseline}</div>
        <div>Mid Target: {midtarget}</div>
        <div>End Target: {endtarget}</div>
        {/* <div>Frequency: {frequency.join(', ')}</div> */}
        {/* <div>MoV: {mov.join(', ')}</div> */}
        {/* <div>Agency: {agency.join(', ')}</div> */}
      </div>
      {members && members.length > 0 && ( // Check for nested members
        <div className="mt-4 pl-4"> {/* Indent nested members */}
          <h4 className="text-sm font-medium">Sub Members:</h4>
          {members.map((subMember) => (
            <SubMemberCard key={subMember.id} subMember={subMember} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MemberCard;
