import { Badge, BadgeProps, CalendarProps, Calendar } from 'antd';
import React from 'react';
import type { Dayjs } from 'dayjs';
import { EventType } from '../../../lib/types';
import colors from "../../../colors"
import getItemStyle from '../../../utils/getItemStyle';

const UtmWidgetCalendar = ({data}:Props) =>{

    const dateCellRender = (value: Dayjs) => {
        const listData = data.filter(d=>
            d.startDate.getDate() === value.date() && 
            d.startDate.getMonth() === value.month()
        );
        return (
            <>
            {listData.map((item, i) => (             
                <Badge key={i} color={getItemStyle(item.type)} status={item.type as BadgeProps['status']} />
            ))}
            </>
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