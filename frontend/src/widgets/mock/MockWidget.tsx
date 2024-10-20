import React from 'react';
import mobius from '../../assets/mockWidgets/mobius.png'
import plot1 from '../../assets/mockWidgets/plot1.png'
import plot2 from '../../assets/mockWidgets/plot2.png'
import loan from '../../assets/mockWidgets/loan.png'
import transaction from '../../assets/mockWidgets/transaction.png'
import accounts from '../../assets/mockWidgets/meist_genutzte_konten.png'
import cricleGraph from '../../assets/mockWidgets/gesamtsaldo_aller_produkte.png'
import info from '../../assets/mockWidgets/shritten.png'
import services from '../../assets/mockWidgets/sharpened_denoised_image.png'
import order from '../../assets/mockWidgets/3_neue_auftrage.png'
import { WidgetType } from '../../lib/types';
import { Flex } from 'antd';

const MockWidget = ({widgetConfig}: Props) =>{

    let img = mobius;
    if (widgetConfig.mode === "0"){
        img = mobius;
    }else if (widgetConfig.mode === "1"){
        img = plot1;
    }else if (widgetConfig.mode === "2"){
        img = plot2;
    }else if (widgetConfig.mode === "3"){
        img = loan;
    }else if (widgetConfig.mode === "4"){
        img = transaction;
    }else if (widgetConfig.mode === "5"){
        img = plot1;
    }else if (widgetConfig.mode === "6"){
        img = accounts;
    }else if (widgetConfig.mode === "7"){
        img = cricleGraph;
    }else if (widgetConfig.mode === "8"){
        img = info;
    }else if (widgetConfig.mode === "9"){
        img = services;
    }else if (widgetConfig.mode === "10"){
        img = order;
    }else{

    }

    return(
        <Flex justify={'center'} align={'center'}>
            <img src={img} alt="widget" style={{width: '75%'}}/>
        </Flex>
    )
}

interface Props{
  widgetConfig: WidgetType
}


export default MockWidget;