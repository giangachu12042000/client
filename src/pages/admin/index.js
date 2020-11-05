import React from 'react';
import './style.scss';
import {Layout} from 'antd';
import GetRoute from '../../app/getRoute';
import {Link} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const Addmin =(props)=>{
    const {routes} = props;
    return(
      <Layout>
          <div className="contain">
            <div>
              <div className="avatar">

              </div>
            </div>
            <Sider className="sider" >
                <div className="contain-name">
                  <Link className="list-name-item" to="/admin/user">user</Link>
                </div>
                <div className="contain-name">
                  <Link className="list-name-item" to="/admin/product">product</Link>
                </div>
                <div className="contain-name">
                  <Link className="list-name-item" to="/admin/category">category</Link>
                </div>
            </Sider>
          </div>
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