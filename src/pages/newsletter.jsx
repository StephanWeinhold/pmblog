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
          <form id="newsletter-anmeldung" name="newsletter-anmeldung" method="POST" data-netlify="true" action="/newsletter-angemeldet">
            <input type="hidden" name="form-name" value="newsletter-anmeldung" />
            <p>
              <label htmlFor="vorname">Vorname</label>
              {" "}
              <input type="text" name="vorname" id="vorname" />
              {" "}
              <label htmlFor="nachname">Nachname</label>
              {" "}
              <input type="text" name="nachname" id="nachname" />
            </p>
            <p>
              <label htmlFor="email">E-Mail Adresse</label>
              {" "}
              <input type="email" name="email" id="email" />
            </p>
            <p>
              <button type="submit">Anmelden</button>
            </p>
          </form>
        </div>
      </Layout>
    );
  }
}

export default NewsletterPage;
