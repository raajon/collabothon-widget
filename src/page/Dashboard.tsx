import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import dashboards from '../assets/dashbordsConfig.json'
import Widget from '../lib/Widget';
import { WidgetType } from '../lib/types';
import axios from 'axios';

const Dashboard = () =>{
    const { Title } = Typography;

    const { id } = useParams();
    const dashboard = dashboards[Number(id) | 0];
    const widgets:WidgetType[][] = dashboards[Number(id) | 0].widgets;

    const [data, setData] = useState([]);
    const API_KEY = "collabothon";

    // Function to fetch data using Axios
    const fetchData = async () => {
        try {
        const response = await axios.get("/parse/classes/Custom", {
            headers: {
            'X-Parse-Application-Id': `${API_KEY}`,
            },
        });
        setData(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    // Call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

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