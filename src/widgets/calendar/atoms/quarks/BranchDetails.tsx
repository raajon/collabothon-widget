import { Button, Descriptions, Divider  } from 'antd';
import { CompassOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BranchDetails = ({ address }: Props) => {
  // State to store the fetched data
  const [data, setData] = useState<any>(null);
  const API_KEY = '7f254722-08c5-4339-a037-5dfa0c520849';

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        '/branches-api/1/v1/geosearch/zip_street?zip=123456&type=P',
        {
          headers: {
            KeyId: `${API_KEY}`,
          },
        }
      );
      const filteredData = response.data.filter(
        (item: any) => item.anschriftStrasse === address.split(',')[0]
      );
      setData(filteredData[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, [address]);

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q="+data.position[0]+","+data.position[1] );
  };

  console.log(data);

  return (
    <div>
      {data && (
        <>
          <Descriptions title='Address'>
            <Descriptions.Item label='Street'>
              {data.anschriftStrasse}
            </Descriptions.Item>
            <Descriptions.Item label='City'>
              {data.anschriftOrt}
            </Descriptions.Item>
            <Descriptions.Item label='ZIP'>
              {data.anschriftPostleitzahl}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Descriptions column={2} title='Contact'>
            <Descriptions.Item label='Telephone'>
              {data.telefon}
            </Descriptions.Item>
            <Descriptions.Item label='Fax'>
              {data.telefax}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Descriptions column={1} title='Opening hours'>
            <Descriptions.Item label='Monday'>
              {data.moMorgenVon}-{data.moMorgenBis}, {data.moNachmiVon}-
              {data.moNachmiBis}
            </Descriptions.Item>
            <Descriptions.Item label='Tuesday'>
              {data.diMorgenVon}-{data.diMorgenBis}, {data.diNachmiVon}-
              {data.diNachmiBis}
            </Descriptions.Item>
            <Descriptions.Item label='Wednesday'>
              {data.miMorgenVon}-{data.miMorgenBis}, {data.miNachmiVon}-
              {data.miNachmiBis}
            </Descriptions.Item>
            <Descriptions.Item label='Thursday'>
              {data.doMorgenVon}-{data.doMorgenBis}, {data.doNachmiVon}-
              {data.doNachmiBis}
            </Descriptions.Item>
            <Descriptions.Item label='Friday'>
              {data.frMorgenVon}-{data.frMorgenBis}, {data.frNachmiVon}-
              {data.frNachmiBis}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Button onClick={showInMapClicked} icon={<CompassOutlined />}>Navigate</Button>
        </>
      )}
    </div>
  );
};

interface Props {
  address: string;
}

export default BranchDetails;
