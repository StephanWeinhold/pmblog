import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import Offenlegungdatenschutz from "../components/Offenlegungdatenschutz/Offenlegungdatenschutz";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class OffenlegungdatenschutzPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Stephan Weinhold | ${config.siteTitle}`} />
          <SEO />
          <Offenlegungdatenschutz />
        </div>
      </Layout>
    );
  }
}

export default OffenlegungdatenschutzPage;
