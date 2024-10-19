import { Badge, BadgeProps, CalendarProps, Calendar, Modal, DatePicker, Col, Row, Flex } from 'antd';
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { EventType } from '../../../lib/types';
import getItemStyle from '../../../utils/getItemStyle';
import UtmWidgetList from './UtmWidgetList';
import { HeaderRender } from 'antd/es/calendar/generateCalendar';

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
                <Badge 
                  color={getItemStyle(item.type)} 
                  status={item.type as BadgeProps['status']} 
                  text={item.title} 
                  title={item.title} 
                  size={'small'}
                />
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


    const header = ({ value, type, onChange, onTypeChange }:any): React.ReactNode => {
      const myOnChange = (date: Dayjs) =>{
        onChange(date);
        setModalDate(null);
      }
      return(
        <Flex gap="middle" align="start" justify={'flex-end'} >
            <DatePicker value={value} placement={'topLeft'} picker={'month'} onChange={myOnChange} allowClear={false}/>
        </Flex>
      )
    }



    return(
      <>
        <Calendar 
          cellRender={cellRender} 
          headerRender={header} 
          onSelect={(newValue: Dayjs)=>setModalDate(newValue)} 
          onPanelChange={()=>setModalDate(null)}
        />
          
        <Modal 
          title={modalDate?.format('DD-MM-YYYY')} 
          open={!!modalDate} 
          footer={()=><></>} 
          onCancel={()=>setModalDate(null)}
        >
          <UtmWidgetList data={filterEvents(modalDate)} />
        </Modal>
      </>
    )
}

interface Props{
    data: EventType[]
}

export default UtmWidgetCalendar;