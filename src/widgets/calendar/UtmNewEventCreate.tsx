import React from 'react';
import { NewEventType } from '../../lib/types';
import { DatePicker, Form, Input, TimePicker } from 'antd';
import dayjs from 'dayjs';
import TextArea from 'antd/es/input/TextArea';

const UtmNewEventCreate = ({ eventConfiguration, setEventConfiguration }: Props) => {

    const onChange = (field: keyof NewEventType, newValue: string) => {
        const newEvent:NewEventType = {...eventConfiguration}
        // @ts-ignore
        newEvent[field] = newValue as typeof newEvent[field];
        setEventConfiguration(newEvent);
    }

    const onDescriptionChange = (newValue: string) => {
        const newEvent:NewEventType = {...eventConfiguration}
        newEvent.data.description = newValue;
        setEventConfiguration(newEvent);
    }

    const onStartTimeChange = (hour: number, minute: number) => {
        const newEvent:NewEventType = {...eventConfiguration}
        dayjs(newEvent.startDate).set('hour', hour).set('minute', minute);
        setEventConfiguration(newEvent);
    }

    const onEndTimeChange = (hour: number, minute: number) => {
        const newEvent:NewEventType = {...eventConfiguration}
        dayjs(newEvent.endDate).set('hour', hour).set('minute', minute);
        setEventConfiguration(newEvent);
    }

    return (
        <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" style={{ maxWidth: 600, marginTop: 30,}}>
            <Form.Item label="Title">
                <Input onChange={(e)=>onChange("title", e.target.value)}/>
            </Form.Item>
            <Form.Item label="Details">
                <TextArea onChange={(e)=>onDescriptionChange( e.target.value)} />
            </Form.Item>
            <Form.Item label="Start date">
                <DatePicker onChange={(e)=>onChange("startDate", e.toString())} />
            </Form.Item>
            <Form.Item label="Start time">
                <TimePicker onChange={(e)=>onStartTimeChange(e.hour(), e.minute())}/>
            </Form.Item>
            <Form.Item label="End date">
                <DatePicker  onChange={(e)=>onChange("endDate", e.toString())}/>
            </Form.Item>
            <Form.Item label="End time">
                <TimePicker onChange={(e)=>onEndTimeChange(e.hour(), e.minute())}/>
            </Form.Item>
        </Form>
    )
}

interface Props {
    eventConfiguration: NewEventType
    setEventConfiguration: Function
}

export default UtmNewEventCreate;