import React from 'react';
import type { CSSProperties } from 'react';
import { EventType } from '../../../lib/types';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import colors from '../../../colors';
import getItemStyle from '../../../utils/getItemStyle';

const UtmWidgetList = ({ data }: Props) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  let panelStyle: React.CSSProperties = {
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
  };

  const items: (panelStyle: CSSProperties) => CollapseProps['items'] = (
    panelStyle
  ) =>
    data.map((item, index) => ({
      key: index,
      label: `${item.type} ${item.startDate}`,
      children: <p>dupadupa</p>,
      style: { ...panelStyle, borderLeftColor: getItemStyle(item.type) },
    }));

  return (
    <Collapse
      items={items(panelStyle)}
      defaultActiveKey={['1']}
      onChange={onChange}
    />
  );
};

interface Props {
  data: EventType[];
}

export default UtmWidgetList;
