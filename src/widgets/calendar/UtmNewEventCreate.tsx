import React from 'react';
import { WidgetType } from '../../lib/types';
import { DatePicker, Form, Input, TimePicker } from 'antd';
import dayjs from 'dayjs';
import TextArea from 'antd/es/input/TextArea';

const UtmNewEventCreate = ({ widgetConfig, setWidgetConfigEdited }: Props) => {

    const onChange = (field: keyof WidgetType, newValue: string) => {
        const newWidgetConfig: WidgetType = { ...widgetConfig }
        //newWidgetConfig[field] = newValue as typeof field;
        setWidgetConfigEdited(newWidgetConfig);
    }

    const format = 'HH:mm';

    return (
        <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" style={{ maxWidth: 600, marginTop: 30,}}>
            <Form.Item label="Title">
                <Input />
            </Form.Item>
            <Form.Item label="Details">
                <TextArea />
            </Form.Item>
            <Form.Item label="Start date">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Start time">
                <TimePicker defaultOpenValue={dayjs('00:00', format)}  format={format} />
            </Form.Item>
            <Form.Item label="End date">
                <DatePicker />
            </Form.Item>
            <Form.Item label="End time">
                <TimePicker defaultOpenValue={dayjs('00:00', format)}  format={format} />
            </Form.Item>
        </Form>
    )
}

interface Props {
    widgetConfig: WidgetType
    setWidgetConfigEdited: Function
}

export default UtmNewEventCreate;