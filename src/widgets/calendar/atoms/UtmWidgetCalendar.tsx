import { Badge, BadgeProps, CalendarProps, Calendar } from 'antd';
import React from 'react';
import type { Dayjs } from 'dayjs';
import { EventType } from '../../../lib/types';
import getItemStyle from '../../../utils/getItemStyle';

const UtmWidgetCalendar = ({data}:Props) =>{

    const dateCellRender = (value: Dayjs) => {
        const listData = data.filter(d=>
            d.startDate.getDate() === value.date() && 
            d.startDate.getMonth() === value.month()
        );
        return (
            // <>
            //   {listData.map((item: EventType, i) => (             
            //       <Badge key={i} color={getItemStyle(item.type)} status={item.type as BadgeProps['status']} text={item.data.title}/>
            //   ))}
            // </>

          <ul className="events">
            {listData.map((item: EventType, i) => (
              <li key={item.data.title}>
                <Badge color={getItemStyle(item.type)} status={item.type as BadgeProps['status']} text={item.data.title} />
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
        <Calendar cellRender={cellRender} headerRender={header}/>
    )
}

interface Props{
    data: EventType[]
}

export default UtmWidgetCalendar;