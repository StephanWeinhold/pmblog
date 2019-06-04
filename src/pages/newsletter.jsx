import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class NewsletterPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Newsletter abonnieren | ${config.siteTitle}`} />
          <SEO />
          Newsletter
        </div>
      </Layout>
    );
  }
}

export default NewsletterPage;
