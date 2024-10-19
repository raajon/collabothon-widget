import React, { MouseEventHandler, ReactElement } from 'react';
import { Button, Card } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import logoPng from '../assets/logo.png';

const WidgetBorder = ({title, children, logo, showEdit}: Props) =>{
    const logoImg = <img src={logoPng} style={{height: "30px", marginRight: "20px"}} alt="widget"/>
    const titleObj = <>{logo && logoImg} {title}</>

    return (
        <Card title={titleObj} extra={<Button type="primary" shape="circle" icon={<SettingFilled />} onClick={showEdit}/>}>
            {children}
        </Card>
    )
}

interface Props{
    title: string, 
    logo: boolean,
    showEdit: MouseEventHandler<HTMLElement>,
    children: ReactElement
}

export default WidgetBorder;