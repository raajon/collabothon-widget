import React from 'react';
import mobius from '../../assets/mockWidgets/mobius.png'
import plot1 from '../../assets/mockWidgets/plot1.png'
import { WidgetType } from '../../lib/types';
import { Flex } from 'antd';

const MockWidget = ({widgetConfig}: Props) =>{

    let img = mobius;
    if (widgetConfig.mode === "0"){
        img = mobius;
    }else if (widgetConfig.mode === "1"){
        img = plot1;
    }else{

    }

    return(
        <Flex justify={'center'} align={'center'}>
            <img src={img} alt="widget"/>
        </Flex>
    )
}

interface Props{
  widgetConfig: WidgetType
}


export default MockWidget;