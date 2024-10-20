import React from 'react';
import { WidgetType } from '../../lib/types';
import { Checkbox, Input, Radio, Typography } from 'antd';
import getItemStyle from '../../utils/getItemStyle';

const UtmWidgetEdit = ({widgetConfig, setWidgetConfigEdited}:Props) =>{

    const types = ["importantDeadlines", "downtime", "appointment", "custom", "loanSchedule", "standingOrder"];

    const typeLabels: { [key: string]: string } = {
        importantDeadlines: 'Financial Deadlines',
        downtime: 'Bank Announcements',
        appointment: 'Bank Appointments',
        custom: 'Custom Events',
        loanSchedule: 'Loans',
        standingOrder: 'Accounts',
    };

    const onChange = (field: keyof WidgetType, newValue: string) =>{
        const newWidgetConfig:WidgetType = {...widgetConfig}
        // @ts-ignore
        newWidgetConfig[field] = newValue as typeof newWidgetConfig[field];
        setWidgetConfigEdited(newWidgetConfig);
    }

    const handleFiltersChange = (type: string) => {
        const newWidgetConfig:WidgetType = {...widgetConfig};
        if (widgetConfig.filters?.includes(type)) {
            newWidgetConfig.filters = widgetConfig.filters.filter((t: string) => t !== type);
        } else {
            newWidgetConfig.filters = [...(widgetConfig.filters), type];
        }
        setWidgetConfigEdited(newWidgetConfig);
      };

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

            <div>
                <Typography.Title level={5}>Filters</Typography.Title>

                <Checkbox checked={widgetConfig.filterable === "true"} onChange={(e)=>onChange("filterable", String(e.target.checked))}>Filters are visible for change</Checkbox>
                <hr/>
                {types.map((type, index) => (
                    <div key={index}>
                    <label style={{ display: 'block', cursor: 'pointer' }}>
                        <input
                        type='checkbox'
                        checked={widgetConfig.filters?.includes(type)}
                        onChange={() => handleFiltersChange(type)}
                        style={{ display: 'none' }} // Hide the default checkbox
                        />
                        <span
                        style={{
                            display: 'inline-block',
                            width: '20px',
                            height: '20px',
                            border: '2px solid',
                            borderColor: getItemStyle(type),
                            borderRadius: '50%',
                            verticalAlign: 'middle',
                            marginRight: '8px',
                            cursor: 'pointer',
                        }}
                        >
                        {widgetConfig.filters?.includes(type) && (
                            <span
                            style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                backgroundColor: getItemStyle(type),
                                borderRadius: '50%',
                                position: 'relative',
                            }}
                            ></span>
                        )}
                        </span>
                        {typeLabels[type] || type}
                    </label>
                    </div>
                ))}
            </div>

            <div>
                <Typography.Title level={5}>Alerts</Typography.Title>
                <Checkbox checked={widgetConfig.alerts === "true"} onChange={(e)=>onChange("alerts", String(e.target.checked))}>
                    Widget show notification about new events
                </Checkbox>
            </div>     
        </>
    )
}

interface Props{
    widgetConfig: WidgetType
    setWidgetConfigEdited: Function
}

export default UtmWidgetEdit;