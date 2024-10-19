import { Button, Radio } from 'antd';
import React, { useState } from 'react';
import dashboards from '../assets/dashbordsConfig.json'
import events from '../assets/eventsConfig.json'
import axios from 'axios';

const LoadData = () =>{

    const [data, setData] = useState();
    const jsonFiles = {
        dashboards,
        events,
    }

    const getJsonByName = (name: string) => {
        if(name==="Dashboard") {
            return jsonFiles.dashboards;
        }
        else {
            return jsonFiles.events;
        }
    }

    const getData = async(table : string) =>{
        const fetchedData = await axios.get(`/parse/classes/${table}`, {
            headers: {
            'X-Parse-Application-Id': "collabothon",
            },
        });
        setData(fetchedData.data.results);
    }

    const putData = async(table: string) =>{
        const json = getJsonByName(table);
        console.log(`put${table}`, json)
        for (const obj of json) {
            await axios.post(`/parse/classes/${table}`, obj, {
                headers: {
                'X-Parse-Application-Id': "collabothon",
                },
            });

        }
        await getData(table);
    }
    
    const removeData = async(table : string) => {
        const fetchedData = await axios.get(`/parse/classes/${table}`, {
            headers: {
            'X-Parse-Application-Id': "collabothon",
            },
        });
        for (const obj of fetchedData.data.results) {
            await axios.delete(`/parse/classes/${table}/`+ obj.objectId, {
                headers: {
                'X-Parse-Application-Id': "collabothon",
                },
            });

        }
        await getData(table);
    }

    return(
        <>
            <Radio.Group>
                <Radio.Button onClick={() => getData("Dashboard")}>show Dashboards server</Radio.Button>
                <Radio.Button onClick={() => putData("Dashboard")}>put Dashboards from file</Radio.Button>
                <Radio.Button onClick={() => removeData("Dashboard")}>remove Dashboards server</Radio.Button>
                <Radio.Button onClick={() => getData("Event")}>show Events server</Radio.Button>
                <Radio.Button onClick={() => putData("Event")}>put Events from file</Radio.Button>
                <Radio.Button onClick={() => removeData("Event")}>remove Events server</Radio.Button>
            </Radio.Group>
            <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
        </>
    )
}

export default LoadData;