import { Button, Radio } from 'antd';
import React, { useState } from 'react';
import dashboards from '../assets/dashbordsConfig.json'
import axios from 'axios';

const LoadData = () =>{

    const [data, setData] = useState();

    const getDashboards = async() =>{
        const dashboards = await axios.get("/parse/classes/Dashboard", {
            headers: {
            'X-Parse-Application-Id': "collabothon",
            },
        });
        setData(dashboards.data.results);
    }

    const putDashboards = async() =>{
        console.log("putDashboards", dashboards)
        for (const d of dashboards) {
            await axios.post("/parse/classes/Dashboard/", d, {
                headers: {
                'X-Parse-Application-Id': "collabothon",
                },
            });

        }
        await getDashboards();
    }
    
    const removeDashboards = async() =>{
        const dashboards = await axios.get("/parse/classes/Dashboard", {
            headers: {
            'X-Parse-Application-Id': "collabothon",
            },
        });
        for (const d of dashboards.data.results) {
            await axios.delete("/parse/classes/Dashboard/"+ d.objectId, {
                headers: {
                'X-Parse-Application-Id': "collabothon",
                },
            });

        }
        await getDashboards();
    }

    return(
        <>
            <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
            <Radio.Group>
                <Radio.Button onClick={getDashboards}>show Dashboards server</Radio.Button>
                <Radio.Button onClick={putDashboards}>put Dashboards from file</Radio.Button>
                <Radio.Button onClick={removeDashboards}>remove Dashboards server</Radio.Button>
            </Radio.Group>
        </>
    )
}

export default LoadData;