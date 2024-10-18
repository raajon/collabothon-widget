import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import Widget from '../lib/Widget';
import { DashboardType, WidgetType } from '../lib/types';
import axios from 'axios';

export async function dashboardLoader({params}: any) {
    const dashboard = await axios.get("/parse/classes/Dashboard/"+params.id, {
        headers: {
        'X-Parse-Application-Id': "collabothon",
        },
    });
    return dashboard.data;
}

const Dashboard = () =>{
    const  dashboard = useLoaderData() as DashboardType;
    const { Title } = Typography;
    const widgets:WidgetType[][] = dashboard.widgets || [];

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