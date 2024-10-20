import React, { MouseEventHandler, ReactElement } from 'react';
import { Button, Card, Space } from 'antd';
import { PlusCircleFilled, SettingFilled } from '@ant-design/icons';
import logoPng from '../assets/logo.png';

const WidgetBorder = ({ title, type, children, logo, showEdit, showNewEventCreate }: Props) => {
    const logoImg = <img src={logoPng} style={{ height: "30px", marginRight: "20px" }} alt="widget" />
    const titleObj = <>{logo && logoImg} {title}</>

    return (
        <Card
            title={titleObj}
            extra={
                <>
                    <Space>
                        {type === 'calendar' && <Button type="primary" shape="circle" icon={<PlusCircleFilled />} onClick={showNewEventCreate} />}
                        <Button type="primary" shape="circle" icon={<SettingFilled />} onClick={showEdit} />
                    </Space>
                </>
            }>
            {children}
        </Card>
    )
}

interface Props {
    title: string,
    type:string,
    logo: boolean,
    showEdit: MouseEventHandler<HTMLElement>,
    showNewEventCreate: MouseEventHandler<HTMLElement>,
    children: ReactElement
}

export default WidgetBorder;