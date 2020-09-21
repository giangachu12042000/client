import React from 'react'
import {Layout} from 'antd'
import GetRoute from '../../app/getRoute'

const { Header, Content, Footer, Sider } = Layout;

const Addmin =(props)=>{
    const {routes} = props;
    return(
        <Layout >
          <Layout>
              <Sider>
              </Sider>
              <Content>
                {routes.map((route, i) =>( <GetRoute key={i} {...route} />))} 
              </Content>
          </Layout>
          <Footer></Footer>
      </Layout>
    )
}

export default Addmin