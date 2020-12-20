import React from "react";
import "./style.scss";
import { Layout } from "antd";
import GetRoute from "../../app/getRoute";
import { Link } from "react-router-dom";
import {
  createFromIconfontCN,
  UsergroupAddOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ],
});
const { Header, Content, Footer, Sider } = Layout;

const Addmin = (props) => {
  const { routes } = props;
  return (
    <Layout>
      <div className="contain">
        <div>
          <div className="avatar"></div>
        </div>
        <Sider className="sider">
          <div className="contain-name">
            <Link className="list-name-item" to="/admin/category">
              <MenuUnfoldOutlined />
              category
            </Link>
          </div>
          <div className="contain-name">
            <Link className="list-name-item" to="/admin/user">
              <UsergroupAddOutlined />
              user
            </Link>
          </div>
          <div className="contain-name">
            <Link className="list-name-item" to="/admin/product">
              <IconFont type="icon-shoppingcart" />
              product
            </Link>
          </div>
        </Sider>
      </div>
      <Layout>
        <Header>Header</Header>
        <Content>
          {routes.map((route, key) => (
            <GetRoute key={key} {...route} />
          ))}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Addmin;
