import React, { useMemo } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DashboardType } from '../lib/types';

export async function menuLoader() {
    const dashboards = await axios.get("/parse/classes/Dashboard", {
        headers: {
        'X-Parse-Application-Id': "collabothon",
        },
    });
    return dashboards.data.results;
}

const PageLayout = () =>{

    const { Header, Content, Footer } = Layout;
    const navigate = useNavigate();
    const  dashboards = useLoaderData() as DashboardType[];

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    const dashboardMenuItems = useMemo(()=>
            new Array(dashboards.length).fill(null).map((_, index) => ({
            key: '/dashboard/'+dashboards[index].objectId,
            label: dashboards[index].title,
        })),[]
    )

    const menuItems = useMemo(()=>[
        ...dashboardMenuItems,
        {key:"sandbox", label:"Sandbox"}
    ],[dashboardMenuItems]);

      

    return (
        <Layout style={{width:'100%', minHeight:'100%', position:'absolute'}}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    items={menuItems}
                    style={{ flex: 1, minWidth: 0 }}
                    onSelect={(d)=>navigate(d.key)}
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

export default PageLayout;