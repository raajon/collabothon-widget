import { Badge, BadgeProps, Calendar, CalendarProps } from 'antd';
import React, { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import UtmWidgetCalendar from './atoms/UtmWidgetCalendar';
import axios from 'axios';
import { EventType } from '../../lib/types';


const UtmWidget = () =>{

  const [data, setData] = useState([] as EventType[]);

  useEffect(()=>{
    axios.get("/parse/classes/Custom", {
      headers: {
      'X-Parse-Application-Id': "collabothon",
      },
    }).then(({data})=>{
      console.log(data)
      setData(data.results);
    })
   
  },[])



    return(
        <UtmWidgetCalendar data={data}/>
    )
}

export default UtmWidget;