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
          <h2>Versäume keinen interessanten, spannende, liebevollen, weiterbildenden, großartigen Projektmanagementartikel mehr.</h2>
          <p>
            Datenblahblah
          </p>
          <h3>Also</h3>
          <form id="newsletter-anmeldung" 
            name="newsletter-anmeldung" 
            method="POST" 
            data-netlify="true" 
            action="/newsletter-angemeldet" 
            className="black-80">
            <div className="measure">
              <input type="hidden" name="form-name" value="newsletter-anmeldung" />
              <p>
                <label htmlFor="anrede" className="f6 b db mb2">
                  Anrede
                  {" "}
                  <span className="normal black-60">(optional)</span>
                </label>
                <div class="flex items-center mb2">
                  <input className="mr2" type="radio" name="anrede" id="anrede-frau" value="frau" />
                  <label for="anrede-frau" class="lh-copy">Liebe</label>
                </div>
                <div class="flex items-center mb2">
                  <input className="mr2" type="radio" name="anrede" id="anrede-mann" value="frau" />
                  <label for="anrede-mann" class="lh-copy">Lieber</label>
                </div>
                <small id="anrede-desc" className="f6 black-60 db mb2">
                  Hier könnt Ihr angeben, welches Wort in der Anrede vor Eurem Namen kommen soll. Falls Ihr denn überhaupt einen Namen angeben wollt.
                </small>
              </p>
              <p>
                <label htmlFor="vorname" className="f6 b db mb2">
                  Vorname
                  {" "}
                  <span className="normal black-60">(optional)</span>
                </label>
                <input type="text" name="vorname" id="vorname" 
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  aria-describedby="vorname-desc" />
                <small id="vorname-desc" className="f6 black-60 db mb2">
                  Wenn Ihr eine persönliche Anrede im Newsletter bevorzugt, könnt Ihr hier Euren Vornamen angeben. Bitte wählt dann auch oben eine Anrede aus.
                </small>
              </p>
              <p>
                <label htmlFor="email" className="f6 b db mb2">
                  E-Mail Adresse
                </label>
                <input type="text" name="email" id="email" 
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  aria-describedby="email-desc" />
                <small id="email-desc" className="f6 black-60 db mb2">
                  Bitte gebt mir die E-Mail Adresse bekannt, an die ich den Newsletter schicken darf.
                </small>
              </p>
              <p>
                <button className="f6 link dim ph3 pv2 mb2 ba bw0 dib white bg-dark-blue" type="submit">Anmelden</button>
              </p>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default NewsletterPage;
