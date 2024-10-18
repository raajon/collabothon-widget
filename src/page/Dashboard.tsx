import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useRevalidator } from 'react-router-dom';
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
    const revalidator = useRevalidator();
    const  dashboard = useLoaderData() as DashboardType;
    const { id } = useParams();
    const { Title } = Typography;
    const widgets:WidgetType[][] = dashboard.widgets || [];

    const updateWidget = async(i:number, j:number, config:WidgetType) =>{
        const newWidgets = JSON.parse(JSON.stringify(dashboard.widgets))
        newWidgets[i][j] = config;
        const newDashboard = {
            title: dashboard.title,
            widgets: newWidgets
        }
        await axios.put("/parse/classes/Dashboard/"+id, newDashboard, {
            headers: {
            'X-Parse-Application-Id': "collabothon",
            },
        });
        revalidator.revalidate();
    }

    return(
        <>
            <Title>{dashboard.title}</Title>
            <Row>
                {widgets.map((col,i)=>(
                    <Col key={i} span={24/widgets.length}>{col.map((w:WidgetType,j)=> <Widget key={j} i={i} j={j} widgetConfig={w} update={updateWidget}/>)}</Col>
                ))}
            </Row>
        </>
    )
}

export default Dashboard;