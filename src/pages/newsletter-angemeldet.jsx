import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class NewsletterAngemeldetPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Newsletter abonniert | ${config.siteTitle}`} />
          <SEO />
          <h2>
          Vielen Dank!
          </h2>
          <p>
          Bestätigungsmail, etc.
          </p>
        </div>
      </Layout>
    );
  }
}

export default NewsletterAngemeldetPage;
