import React from 'react';
import { WidgetType } from '../../lib/types';
import { Input, Radio, Typography } from 'antd';

const UtmWidgetEdit = ({widgetConfig, setWidgetConfigEdited}:Props) =>{

    const onChange = (field: keyof WidgetType, newValue: string) =>{
        const newWidgetConfig:WidgetType = {...widgetConfig}
        newWidgetConfig[field] = newValue as typeof field;
        setWidgetConfigEdited(newWidgetConfig);
    }

    return(
        <> 
            <div>
                <Typography.Title level={5}>Title</Typography.Title>
                <Input value={widgetConfig.title} onChange={(e)=>onChange("title", e.target.value)}/>
            </div>
            <div>
                <Typography.Title level={5}>Mode</Typography.Title>
                <Radio.Group value={widgetConfig.mode} onChange={(e)=>onChange("mode", e.target.value)}>
                    <Radio.Button value="0">Calendar + List</Radio.Button>
                    <Radio.Button value="1">Big Calendar</Radio.Button>
                    <Radio.Button value="2">Small Calendar</Radio.Button>
                    <Radio.Button value="3">Just List</Radio.Button>
                </Radio.Group>
            </div>
        </>
    )
}

interface Props{
    widgetConfig: WidgetType
    setWidgetConfigEdited: Function
}

export default UtmWidgetEdit;