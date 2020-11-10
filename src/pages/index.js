import React, { Component } from "react";
import Routes from "../app/getRoute";
import Header from "../components/Header";

class MaintPage extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <section className="bg-orange-500 py-1">
          <Header />
        </section>
        <section className="container">
          {routes &&
            routes.map((route, key) => <Routes key={key} {...route} />)}
        </section>
        <section>{/* footer */}</section>
      </div>
    );
  }
}

export default MaintPage;
