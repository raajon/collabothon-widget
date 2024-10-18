import React, { useMemo, useState } from 'react';
import WidgetBorder from './WidgetBorder';
import { Calendar, Modal } from 'antd';
import { WidgetType } from './types';
import CalendarWidget from '../widgets/calendar/CalendarWidget';
import CalendarWidgetEdit from '../widgets/calendar/CalendarWidgetEdit';

const Widget = (widgetConfig:WidgetType) =>{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const {type, title} = widgetConfig;

    const widget = useMemo(()=>{
        if(type==='calendar'){
            return <CalendarWidget />
        }else{
            return <div>Widget type not found</div>
        }
    },[type]);


    const widgetEdit = useMemo(()=>{
        if(type==='calendar'){
            return <CalendarWidgetEdit />
        }else{
            return <div>Widget edit form type not found</div>
        }
    },[type]);

    const showEdit = () =>{
        setIsModalOpen(true);
    }
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <WidgetBorder title={title} showEdit={showEdit}>
                {widget}
            </WidgetBorder>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {widgetEdit}
            </Modal>
        </>
    )
}

export default Widget;