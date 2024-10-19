import { Badge, BadgeProps, Calendar, CalendarProps, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import UtmWidgetCalendar from './atoms/UtmWidgetCalendar';
import axios from 'axios';
import { EventType } from '../../lib/types';
import UtmWidgetList from './atoms/UtmWidgetList';


const UtmWidget = () =>{

  const [data, setData] = useState([] as EventType[]);

  useEffect(()=>{
    axios.get("/parse/classes/Event", {
      headers: {
      'X-Parse-Application-Id': "collabothon",
      },
    }).then(({data})=>{
      data.results?.forEach((d:any)=>{
        d.startDate = new Date(d.startDate.iso)
        if(d.endDate){
          d.endDate = new Date(d.endDate.iso)
        }
      })
      setData(data.results);
    })
   
  },[])



    return(
        <Row justify="space-between">
          <Col span={11}>
            <UtmWidgetCalendar data={data}/>
          </Col>
          <Col span={11}>
            <UtmWidgetList data={data}/>
          </Col>
        </Row>
    )
}

export default UtmWidget;