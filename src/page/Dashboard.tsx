import { Col, Row } from 'antd';
import React from 'react';
import CalendarWidget from '../widgets/calendar/CalendarWidget';

const Dashboard = () =>{

    const dashboard = [
        [<CalendarWidget />],
        []
    ]

    return(
        <Row>
            {dashboard.map(c=>(
                <Col span={24/dashboard.length}>{c[0]}</Col>
            ))}
        </Row>
    )
}

export default Dashboard;