import { Badge, BadgeProps, Calendar, CalendarProps, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import type { Dayjs } from 'dayjs';
import UtmWidgetCalendar from './atoms/UtmWidgetCalendar';
import axios from 'axios';
import { EventType } from '../../lib/types';
import UtmWidgetList from './atoms/UtmWidgetList';
import UtmWidgetFilter from './atoms/UtmWidgetFilter';

const UtmWidget = () => {
  const [data, setData] = useState([] as EventType[]);
  const [filteredData, setFilteredData] = useState([] as EventType[]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

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

  return (
    <>
      <UtmWidgetFilter
        types={types}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
      <Row justify='space-between'>
        <Col span={11}>
          <UtmWidgetCalendar data={filteredData} />
        </Col>
        <Col span={11}>
          <UtmWidgetList data={filteredData} />
        </Col>
      </Row>
    </>
  );
};

export default UtmWidget;
