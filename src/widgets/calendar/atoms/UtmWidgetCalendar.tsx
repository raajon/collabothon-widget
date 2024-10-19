import { Badge, BadgeProps, CalendarProps, Calendar } from 'antd';
import React from 'react';
import type { Dayjs } from 'dayjs';
import { EventType } from '../../../lib/types';
import colors from "../../../colors"

const getListData = (value: Dayjs) => {
    let listData: { type: string; content: string }[] = []; // Specify the type of listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'meeting', content: 'This is meeting event.' },
          { type: 'payment', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'meeting', content: 'This is meeting event.' },
          { type: 'payment', content: 'This is usual event.' },
          { type: 'maintanance', content: 'This is maintanance event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'meeting', content: 'This is meeting event' },
          { type: 'payment', content: 'This is very long usual event......' },
          { type: 'maintanance', content: 'This is maintanance event 1.' },
          { type: 'maintanance', content: 'This is maintanance event 2.' },
          { type: 'maintanance', content: 'This is maintanance event 3.' },
          { type: 'maintanance', content: 'This is maintanance event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  };
  


const UtmWidgetCalendar = ({data}:Props) =>{

    const getItemStyle = (type: string) => {
        switch (type) {
          case 'meeting':
            return colors.harvest;
          case 'payment':
            return colors.mint;
          case 'maintanance':
            return colors.warning;
          default:
            return colors.petrol
        }
    };
      

    const dateCellRender = (value: Dayjs) => {
    // data.forEach(d=>{
    //     console.log(d)
    //     console.log(JSON.stringify(d.startDate))
    // })
    // console.log(data)
    const listData = getListData(value);
    // const listData = data.filter(d=>d.startDate.getDay === value.day && d.startDate.getMonth === value.month)
    // const listData = data.filter(d=>d.startDate.getDay() === value.day());
    // console.log(value, listData)
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