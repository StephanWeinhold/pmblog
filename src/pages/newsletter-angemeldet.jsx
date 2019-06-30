import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const API_KEY = '03454650ec1e123420afef94d321b87f-b892f62e-23304395';
const DOMAIN = 'mail.projektmanagementblog.de';
const HOST = 'https://api.eu.mailgun.net﻿';
const mailgun = require('mailgun.js');
const mg = mailgun.client(
  {
    url: HOST,
    domain: DOMAIN,
    username: 'api', 
    key: process.env.MAILGUN_API_KEY || API_KEY,
  }
);

mg.messages.create(DOMAIN, {
    from: "Projektmanagementblog Newsletter <newsletter@" + DOMAIN + ">",
    to: ["stephan.weinhold@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness from the EU again!",
    html: "<h1>Testing some Mailgun awesomness from the EU again!</h1><p>Yay yay yay.</p>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error

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
