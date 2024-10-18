import React, { MouseEventHandler, ReactElement } from 'react';
import { Button, Card } from 'antd';
import { SettingFilled } from '@ant-design/icons';

const WidgetBorder = ({title, children, showEdit}: Props) =>{

    return (
        <Card title={title} extra={<Button type="primary" shape="circle" icon={<SettingFilled />} onClick={showEdit}/>}>
            {children}
        </Card>
    )
}

interface Props{
    title: string, 
    showEdit: MouseEventHandler<HTMLElement>,
    children: ReactElement
}

export default WidgetBorder;