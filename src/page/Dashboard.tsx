import React from 'react';
import CalendarWidget from '../widgets/calendar/CalendarWidget';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import dashboards from '../assets/dashbordsConfig.json'
import Widget from '../lib/Widget';
import { WidgetType } from '../lib/types';

const Dashboard = () =>{
    const { Title } = Typography;

    const { id } = useParams();
    const dashboard = dashboards[Number(id) | 0];
    const widgets:WidgetType[][] = dashboards[Number(id) | 0].widgets;

    return(
        <>
            <Title>{dashboard.title}</Title>
            <Row>
                {widgets.map((col,i)=>(
                    <Col key={i} span={24/widgets.length}>{col.map((w:WidgetType,j)=> <Widget key={j} {...w}/>)}</Col>
                ))}
            </Row>
        </>
    )
}

export default Dashboard;