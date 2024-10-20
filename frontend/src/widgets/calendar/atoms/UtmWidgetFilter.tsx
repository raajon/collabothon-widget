import React from 'react';
import getItemStyle from '../../../utils/getItemStyle';

const UtmWidgetFilter = ({ types, selectedTypes, setSelectedTypes }: Props) => {
  const handleCheckboxChange = (type: string) => {
    setSelectedTypes((prevSelectedTypes: string[]) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t: string) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };

  const typeLabels: { [key: string]: string } = {
    importantDeadlines: 'Financial Deadlines',
    downtime: 'Bank Announcements',
    appointment: 'Bank Appointments',
    custom: 'Custom Events',
    loanSchedule: 'Loans',
    standingOrder: 'Accounts',
  };

  return (
    <div style={{ display: 'flex', marginBottom:"2rem" }}>
      <div  style={{ display: 'flex', width:"100%", justifyContent: "space-between", paddingLeft: "1rem", paddingRight: "1rem"}}>
      <span style={{ whiteSpace: "no-wrap"}}>Filter by event type:</span>
      {types.map((type, index) => (
        <div key={index}>
          <label style={{ display: 'block', cursor: 'pointer' }}>
            <input
              type='checkbox'
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
              style={{ display: 'none' }} // Hide the default checkbox
            />
            <span
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                border: '2px solid',
                borderColor: getItemStyle(type),
                borderRadius: '50%',
                verticalAlign: 'middle',
                marginRight: '8px',
                cursor: 'pointer',
              }}
            >
              {selectedTypes.includes(type) && (
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: getItemStyle(type),
                    borderRadius: '50%',
                    position: 'relative',
                  }}
                ></span>
              )}
            </span>
            {typeLabels[type] || type}
          </label>
        </div>
      ))}
      </div>
    </div>
  );
};

interface Props {
  types: string[];
  selectedTypes: string[];
  setSelectedTypes: any;
}

export default UtmWidgetFilter;
