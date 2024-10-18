import { Card } from 'antd';
import React, { ReactElement } from 'react';

const WidgetBorder = ({children}: Props) =>{

    return (
        <Card>{children}</Card>
    )
}

interface Props{
    children: ReactElement
}

export default WidgetBorder;