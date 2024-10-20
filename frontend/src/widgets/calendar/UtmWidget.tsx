import { Row, Col, Alert, Button, Space, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import UtmWidgetCalendar from './atoms/UtmWidgetCalendar';
import axios from 'axios';
import { EventType, WidgetType } from '../../lib/types';
import UtmWidgetList from './atoms/UtmWidgetList';
import UtmWidgetFilter from './atoms/UtmWidgetFilter';
import dayjs from 'dayjs';
import Parse from 'parse';

const UtmWidget = ({widgetConfig}:Props) => {
  const [data, setData] = useState([] as EventType[]);
  const [filteredData, setFilteredData] = useState([] as EventType[]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(widgetConfig.filters);
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [newEvents, setNewEvents] = useState([] as EventType[])
  const [newEventsDetails, setNewEventsDetails] = useState([] as EventType[])

  useEffect(() => {
    getAllEvents();
    createLiveQuery();
  }, []);

  useEffect(()=> {
    setTypes(Array.from(new Set(data.map((item) => item.type))));
    findNewEvents();
  },[data]);

  useEffect(() => {
    setSelectedTypes(widgetConfig.filters);
  }, [widgetConfig]); 

  useEffect(() => {
    filterData();
  }, [data, selectedTypes]); 

  const getAllEvents = () =>{
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
  }

  const createLiveQuery = async() =>{
    Parse.initialize("collabothon");
    Parse.serverURL = 'https://polarny.it/parse'
    let query = new Parse.Query('Event');
    let subscription = await query.subscribe();
    subscription.on('create', (event) => {
      getAllEvents();
    });
    subscription.on('update', (event) => {
      getAllEvents();
    });
  }

  const filterData = () => {
      setFilteredData(
        data.filter((event) => selectedTypes.includes(event.type))
      );
  };

  const findNewEvents = () =>{
    setNewEvents(data.filter((event)=>!event.seen));
  }

  const acknowledgeAll = async() =>{
    for( const e of newEvents){
      await axios
        .put(`/parse/classes/Event/${e.objectId}`, {seen:true}, {
          headers: {
            'X-Parse-Application-Id': 'collabothon',
          },
        })
    }
    setNewEventsDetails([])
  }

  const getWidgetDesign = () =>{
    if(widgetConfig.mode === "0"){
      return(
        <>
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
          <UtmWidgetCalendar data={filteredData} setSelectedDate={setSelectedDate}/>
        </>

      )
    }
    else if(widgetConfig.mode === "2"){
      return(
        <>
          <UtmWidgetCalendar data={filteredData} setSelectedDate={setSelectedDate} small={true}/>
        </>

      )
    }
    else if(widgetConfig.mode === "3"){
      return(
        <>
          <UtmWidgetList data={filteredData.filter(d=>d.startDate.getMonth() === selectedDate.month())} />
        </>

      )
    }
  }

  return (
    <>
      { widgetConfig.alerts && newEvents.length>0 && 
        <Alert 
        message={`There are ${newEvents.length} new events you haven't seen!`} 
        type="warning" 
        action={
          <Space direction="vertical">
            <Button size="small" type="primary" onClick={acknowledgeAll}>
              Acknowledge all
            </Button>
            <Button size="small" danger ghost onClick={()=>setNewEventsDetails([...newEvents])}>
              See details
            </Button>
          </Space>
        }
        />
      }
      {widgetConfig.filterable === "true" && <UtmWidgetFilter
        types={types}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />}
      {getWidgetDesign()}
      <Modal 
        title="New events you haven't seen!" 
        open={newEventsDetails.length>0} 
        // footer={()=><></>} 
        okText="Acknowledge all"
        onOk={acknowledgeAll}
        onCancel={()=>setNewEventsDetails([])}
      >
        <UtmWidgetList data={newEventsDetails} />
      </Modal>
    </>
  );
};

interface Props{
  widgetConfig: WidgetType
}

export default UtmWidget;
