import React from 'react';
import { WidgetType } from '../../lib/types';
import { Input, Typography } from 'antd';

const CalendarWidgetEdit = ({widgetConfig, setWidgetConfigEdited}:Props) =>{

    const onChange = (field: keyof WidgetType, newValue: string) =>{
        const newWidgetConfig = {...widgetConfig}
        newWidgetConfig[field] = newValue;
        setWidgetConfigEdited(newWidgetConfig);
    }

    return(
        <> 
            <div>
                <Typography.Title level={5}>Title</Typography.Title>
                <Input value={widgetConfig.title} onChange={(event)=>onChange("title", event.target.value)}/>
            </div>
        </>
    )
}

interface Props{
    widgetConfig: WidgetType
    setWidgetConfigEdited: Function
}

export default CalendarWidgetEdit;