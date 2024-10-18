import React from 'react';
import WidgetBorder from './WidgetBorder';
import { Calendar } from 'antd';

const Widget = ({type}:Props) =>{

    let widget = <div>widget not found</div>
    if(type='calendar'){
        widget = <Calendar />
    }

    return(
        <WidgetBorder>
            {widget}
        </WidgetBorder>
    )
}

interface Props{
    type: string
}

export default Widget;