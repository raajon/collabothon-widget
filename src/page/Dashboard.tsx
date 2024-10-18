import React from 'react';
import CalendarWidget from '../widgets/calendar/CalendarWidget';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'antd';
import dashboards from '../assets/dashbordsConfig.json'
import Widget from '../lib/Widget';

const Dashboard = () =>{

    const { id } = useParams();
    const widgets = dashboards[Number(id) | 0].widgets;
    
    return(
        <Row>
            {widgets.map((col,i)=>(
                <Col key={i} span={24/widgets.length}>{col.map((w,j)=> <Widget key={j} {...w}/>)}</Col>
            ))}
        </Row>
    )
}

export default Dashboard;