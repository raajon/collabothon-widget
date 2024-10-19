import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import UtmWidgetCalendar from './atoms/UtmWidgetCalendar';
import axios from 'axios';
import { EventType, WidgetType } from '../../lib/types';
import UtmWidgetList from './atoms/UtmWidgetList';
import UtmWidgetFilter from './atoms/UtmWidgetFilter';
import dayjs from 'dayjs';

const UtmWidget = ({widgetConfig}:Props) => {
  const [data, setData] = useState([] as EventType[]);
  const [filteredData, setFilteredData] = useState([] as EventType[]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState(dayjs())

  useEffect(() => {
    axios
      .get('/parse/classes/Event', {
        headers: {
          'X-Parse-Application-Id': 'collabothon',
        },
      })
      .then(({ data }) => {
        data.results?.forEach((d: any) => {
          d.startDate = new Date(d.startDate.iso);
          if (d.endDate) {
            d.endDate = new Date(d.endDate.iso);
          }
        });
        const sortedResults = data.results?.sort((a:EventType, b:EventType) => {
          return a.startDate.getTime() - b.startDate.getTime(); // Sort in ascending order
        });
        setData(sortedResults);
      });
  }, []);

  useEffect(()=> {
    setTypes(Array.from(new Set(data.map((item) => item.type))));
    setSelectedTypes(types);
  },[data]);

  useEffect(() => {
    filterData();
  }, [selectedTypes]); 

  const filterData = () => {
      setFilteredData(
        data.filter((event) => selectedTypes.includes(event.type))
      );
  };

  const getWidgetDesign = () =>{
    if(widgetConfig.mode === "0"){
      return(
        <>
          <UtmWidgetFilter
            types={types}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Row justify='space-between'>
            <Col span={17}>
              <UtmWidgetCalendar data={filteredData} setSelectedDate={setSelectedDate}/>
            </Col>
            <Col span={6}>
              <UtmWidgetList data={filteredData.filter(d=>d.startDate.getMonth() === selectedDate.month())} />
            </Col>
          </Row>
        </>

      )
    }
    else if(widgetConfig.mode === "1"){
      return(
        <>
          <UtmWidgetFilter
            types={types}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Row justify='space-between'>
            <Col span={24}>
              <UtmWidgetCalendar data={filteredData} setSelectedDate={setSelectedDate}/>
            </Col>
          </Row>
        </>

      )
    }
    else if(widgetConfig.mode === "2"){
      return(
        <>
          <UtmWidgetFilter
            types={types}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <Row justify='space-between'>
            <Col span={24}>
              <UtmWidgetCalendar data={filteredData} setSelectedDate={setSelectedDate} small={true}/>
            </Col>
          </Row>
        </>

      )
    }
    else if(widgetConfig.mode === "3"){
      return(
        <>
          <UtmWidgetFilter
            types={types}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <UtmWidgetList data={filteredData.filter(d=>d.startDate.getMonth() === selectedDate.month())} />
        </>

      )
    }
  }

  return (
    <>
      {getWidgetDesign()}
    </>
  );
};

interface Props{
  widgetConfig: WidgetType
}

export default UtmWidget;
