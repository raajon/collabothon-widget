import React, { useMemo, useState } from 'react';
import WidgetBorder from './WidgetBorder';
import { Modal } from 'antd';
import { WidgetType } from './types';
import UtmWidget from '../widgets/calendar/UtmWidget';
import UtmWidgetEdit from '../widgets/calendar/UtmWidgetEdit';

const Widget = ({widgetConfig, i, j, update}:Props) =>{

    const [widgetConfigEdited, setWidgetConfigEdited] = useState(widgetConfig)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {type, title} = widgetConfig;

    const widget = useMemo(()=>{
        if(type==='calendar'){
            return <UtmWidget />
        }else{
            return <div>Widget type not found</div>
        }
    },[type]);


    const widgetEdit = useMemo(()=>{
        if(type==='calendar'){
            return <UtmWidgetEdit widgetConfig={widgetConfigEdited} setWidgetConfigEdited={setWidgetConfigEdited}/>
        }else{
            return <div>Widget edit form type not found</div>
        }
    },[type, widgetConfigEdited]);

    const showEdit = () =>{
        setIsModalOpen(true);
    }
    
    const handleOk = () => {
        update(i,j, widgetConfigEdited);
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

interface Props{
    widgetConfig: WidgetType
    i: number
    j: number
    update: (i:number, j:number, config:WidgetType ) => void
}

export default Widget;