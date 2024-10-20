import React from 'react';
import { WidgetType } from '../../lib/types';
import { Input, Radio, Typography } from 'antd';

const MockWidgetEdit = ({widgetConfig, setWidgetConfigEdited}:Props) =>{

    const onChange = (field: keyof WidgetType, newValue: string) =>{
        const newWidgetConfig:WidgetType = {...widgetConfig}
        // @ts-ignore
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
                    <Radio.Button value="0">Mobius</Radio.Button>
                    <Radio.Button value="1">Plot 1</Radio.Button>
                    <Radio.Button value="2">Plot 2</Radio.Button>
                    <Radio.Button value="3">Loan</Radio.Button>
                    <Radio.Button value="4">Transaction</Radio.Button>
                    <Radio.Button value="6">Accounts</Radio.Button>
                    <Radio.Button value="7">Circle Graph</Radio.Button>
                    <Radio.Button value="8">Info</Radio.Button>
                    <Radio.Button value="9">Services</Radio.Button>
                    <Radio.Button value="10">Order</Radio.Button>
                </Radio.Group>
            </div>
        </>
    )
}

interface Props{
    widgetConfig: WidgetType
    setWidgetConfigEdited: Function
}

export default MockWidgetEdit;