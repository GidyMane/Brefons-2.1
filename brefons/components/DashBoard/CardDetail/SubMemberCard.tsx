import React from 'react';

const SubMemberCard = ({ subMember }) => {
  const { id, title, unit, baseline, midtarget, endtarget, frequency, mov, agency } = subMember;

  return (
    <div className="mb-2 pl-4"> {/* Indent sub-member content */}
      <div className="text-gray-600">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div>Unit: {unit}</div>
        <div>Baseline: {baseline}</div>
        <div>Mid Target: {midtarget}</div>
        <div>End Target: {endtarget}</div>
        {/* {frequency && <div>Frequency: {frequency.join(', ')}</div>} */}
        {/* {mov && <div>MoV: {mov.join(', ')}</div>} */}
        {/* {agency && <div>Agency: {agency.join(', ')}</div>} */}
      </div>
    </div>
  );
};

export default SubMemberCard;