import React, { useMemo, useState } from 'react';
import WidgetBorder from './WidgetBorder';
import { Button, Modal, Space } from 'antd';
import { EventType, WidgetType } from './types';
import UtmWidget from '../widgets/calendar/UtmWidget';
import UtmWidgetEdit from '../widgets/calendar/UtmWidgetEdit';
import MockWidget from '../widgets/mock/MockWidget';
import MockWidgetEdit from '../widgets/mock/MockWidgetEdit';
import UtmNewEventCreate from '../widgets/calendar/UtmNewEventCreate';
import axios from 'axios';

const Widget = ({ widgetConfig, i, j, update }: Props) => {

    const [widgetConfigEdited, setWidgetConfigEdited] = useState(widgetConfig)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
    const { type, title } = widgetConfig;
    const [eventConfiguration, setEventConfiguration] = useState({
        type: 'custom',
        seen: true,
        data: {}
    }as EventType)

    const widget = useMemo(() => {
        if (type === 'calendar') {
            return <UtmWidget widgetConfig={widgetConfig} />
        } else if (type === 'mock') {
            return <MockWidget widgetConfig={widgetConfig} />
        } else {
            return <div>Widget type not found</div>
        }
    }, [type, widgetConfig]);


    const widgetEdit = useMemo(() => {
        if (type === 'calendar') {
            return <UtmWidgetEdit widgetConfig={widgetConfigEdited} setWidgetConfigEdited={setWidgetConfigEdited} />
        } else if (type === 'mock') {
            return <MockWidgetEdit widgetConfig={widgetConfigEdited} setWidgetConfigEdited={setWidgetConfigEdited} />
        } else {
            return <div>Widget edit form type not found</div>
        }
    }, [type, widgetConfigEdited]);

    const newEventCreate = useMemo(() => {
        return <UtmNewEventCreate eventConfiguration={eventConfiguration} setEventConfiguration={setEventConfiguration} />
    }, [eventConfiguration]);

    const showEdit = () => {
        setWidgetConfigEdited(widgetConfig)
        setIsModalOpen(true);
    }

    const handleOk = () => {
        update(i, j, widgetConfigEdited);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showNewEventCreate = () => {
        setIsNewEventModalOpen(true);
    }

    const saveNewEvent = async() => {
        const newEventConfiguration = {
            ...eventConfiguration,
            startDate:{
                "__type":"Date",
                iso: eventConfiguration.startDate
            },
            endDate:{
                "__type":"Date",
                iso: eventConfiguration.endDate
            },
        }
        await axios.post("/parse/classes/Event", newEventConfiguration, {
            headers: {
              "X-Parse-Application-Id": "collabothon",
            },
          });
        setIsNewEventModalOpen(false);
    };

    const handleNewEventCancel = () => {
        const clearEvent = {
            type: 'custom',
            title: "",
            seen: true,
            data: {},
            startDate: new Date(),
            endDate: new Date()
        }
        setEventConfiguration(clearEvent);
        setIsNewEventModalOpen(false);
    };

    return (
        <>
            <WidgetBorder title={title} type={type} logo={type === 'calendar'} showEdit={showEdit} showNewEventCreate={showNewEventCreate}>
                {widget}
            </WidgetBorder>
            <Modal title="New Event" open={isNewEventModalOpen} onCancel={handleNewEventCancel} footer={
                <Space>
                    <Button type="primary" onClick={saveNewEvent}>Save</Button>
                    <Button type="primary" onClick={handleNewEventCancel}>Cancel</Button>
                </Space>
            }>
                {newEventCreate}
            </Modal>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {widgetEdit}
            </Modal>
        </>
    )
}

interface Props {
    widgetConfig: WidgetType
    i: number
    j: number
    update: (i: number, j: number, config: WidgetType) => void
}

export default Widget;