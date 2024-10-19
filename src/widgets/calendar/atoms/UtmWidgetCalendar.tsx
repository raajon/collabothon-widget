import { Badge, BadgeProps, CalendarProps, Calendar, Modal } from 'antd';
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { EventType } from '../../../lib/types';
import getItemStyle from '../../../utils/getItemStyle';
import UtmWidgetList from './UtmWidgetList';

const UtmWidgetCalendar = ({data}:Props) =>{

    const [modalDate, setModalDate] = useState(null as Dayjs | null);

    const filterEvents = (value: Dayjs | null) =>{
      if( value ){
        return data.filter(d=>
          d.startDate.getDate() === value.date() && 
          d.startDate.getMonth() === value.month()
        );
      }else{
        return [];
      }
    }

    const dateCellRender = (value: Dayjs) => {
        
        return (
          <ul className="events">
            {filterEvents(value).map((item: EventType, i) => (
              <li key={item.title}>
                <Badge color={getItemStyle(item.type)} status={item.type as BadgeProps['status']} text={item.title} />
              </li>
            ))}
          </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return <></>;
        return info.originNode;
      };

    const header = () => (<div>dupa</div>)

    return(
      <>
        <Calendar cellRender={cellRender} headerRender={header} onSelect={(newValue: Dayjs)=>setModalDate(newValue)}/>
        <Modal title="Basic Modal" open={!!modalDate} onOk={()=>setModalDate(null)} onCancel={()=>setModalDate(null)}>
          <UtmWidgetList data={filterEvents(modalDate)} />
        </Modal>
      </>
    )
}

interface Props{
    data: EventType[]
}

export default UtmWidgetCalendar;