import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Stephan Weinhold | ${config.siteTitle}`} />
          <SEO />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
