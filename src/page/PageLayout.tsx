import React, { ReactElement } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import dashboards from '../assets/dashbordsConfig.json'


const { Header, Content, Footer } = Layout;

const PageLayout = ({  }: Props) =>{

    const navigate = useNavigate();

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    const items = new Array(dashboards.length).fill(null).map((_, index) => ({
        key: index,
        label: dashboards[index].title,
      }));

      

    return (
        <Layout style={{width:'100%', minHeight:'100%', position:'absolute'}}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                    onSelect={(d)=>navigate('/dashboard/'+d.key)}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <div style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}

interface Props{
}

export default PageLayout;