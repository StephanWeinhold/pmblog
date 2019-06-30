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
            Ihr kennt das Prozedere: Ihr erhaltet demnächst von mir ein E-Mail, 
            in dem Ihr die Anmeldung zum Newsletter bitte nocheinmal bestätigt. 
            Damit kann Euch keiner ohne Euren Willen hier eintragen.
          </p>
          <p>
            Ich freue mich übrigens auch sehr über Rückmeldungen! Also bis bald!
          </p>
        </div>
      </Layout>
    );
  }
}

export default NewsletterAngemeldetPage;
