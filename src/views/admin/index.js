import React from 'react'
import {Layout} from 'antd'
import GetRoute from '../../app/getRoute'

const { Header, Content, Footer, Sider } = Layout;

const Addmin =(props)=>{
    const {routes} = props;
    return(
      <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          {routes.map((route, key) =>( <GetRoute key={key} {...route} />))} 
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    )
  }
  
export default Addmin