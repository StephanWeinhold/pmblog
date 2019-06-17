import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class NewsletterPage extends Component {
  render() {
    const { location } = this.props;
    const mailAddress = decodeURIComponent(location.search.substring(3));
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Newsletter abonnieren | ${config.siteTitle}`} />
          <SEO />
          <div className="measure lh-copy">
            <h3>{(mailAddress) ? 'Ein kleiner Schritt noch...' : 'Versäume keinen interessanten, spannenden, liebevoll geschriebenen, weiterbildenden, großartigen Projektmanagementartikel mehr.'}</h3>
            <p>
              {(mailAddress) ? 'Wenn Ihr eine persönliche Begrüßung im Newsletter sehen wollt, könnt Ihr mir hier noch Eure bevorzugte Anrede und Euren Vornamen bekannt geben. ' : null}
              Bei mir gibt es keine Superdupiseminare zu buchen, keine E-Books zu gewinnen, und keine Penisvergrößerungspillen zu kaufen. 
              Ich schicke Euch keine Werbung. 
              Ihr bekommt nur eine nette Nachricht, wenn und dass ein neuer Artikel auf diesem Blog veröffentlicht wurde.
            </p>
            <h3>Also</h3>
            <form 
              id="newsletter-anmeldung" 
              name="newsletter-anmeldung" 
              method="POST" 
              data-netlify="true" 
              action="/newsletter-angemeldet" 
              className="black-80"
            >
              <input type="hidden" name="form-name" value="newsletter-anmeldung" />
              <p>
                <label htmlFor="anrede" className="f6 b db mb2">
                  Anrede
                  {" "}
                  <span className="normal black-60">(optional)</span>
                </label>
                <div className="flex items-center mb2">
                  <input className="mr2" type="radio" name="anrede" id="anrede-frau" value="frau" />
                  <label htmlFor="anrede-frau" className="lh-copy">Liebe</label>
                </div>
                <div className="flex items-center mb2">
                  <input className="mr2" type="radio" name="anrede" id="anrede-mann" value="frau" />
                  <label htmlFor="anrede-mann" className="lh-copy">Lieber</label>
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
                <input 
                  type="text" 
                  name="vorname" 
                  id="vorname" 
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  aria-describedby="vorname-desc" 
                />
                <small id="vorname-desc" className="f6 black-60 db mb2">
                  Wenn Ihr eine persönliche Anrede im Newsletter bevorzugt, könnt Ihr hier Euren Vornamen angeben. Bitte wählt dann auch oben eine Anrede aus.
                </small>
              </p>
              <p>
                <label htmlFor="email" className="f6 b db mb2">
                  E-Mailadresse
                </label>
                <input 
                  value={mailAddress}
                  type="text" 
                  name="email" 
                  id="email" 
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  aria-describedby="email-desc" 
                />
                <small id="email-desc" className="f6 black-60 db mb2">
                  {(mailAddress) ? 'Bitte kontrolliert nochmal Eure E-Mailadresse.' : 'Bitte gebt mir die E-Mailadresse bekannt, an die ich den Newsletter schicken darf.'}
                </small>
              </p>
              <p>
                <button className="f6 link dim ph3 pv2 mb2 ba bw0 dib white bg-dark-blue" type="submit">Anmelden</button>
              </p>
            </form>
            <h3>Wie oft kommt denn so ein Newsletter?</h3>
            <p>
              Ich bemühe mich sehr, für meine Artikel einen Takt von 14 Tagen einzuhalten. 
              Also werdet Ihr ca. zwei Newsletter pro Monat erhalten.
            </p>
            <h3>Die Technik dahinter</h3>
            <p>
              Ich verwende 
              {" "}
              <a href="https://www.mailgun.com/" target="_blank" rel="noopener noreferrer">Mailgun</a>
              , um meinen Newsletter zu verschicken. 
              Und zwar die in der EU gehostete Variante. 
              Sprich, kein US-Server. 
              Ich speichere dort Eure E-Mailadresse und gegebenenfalls Euren Vornamen.
            </p>
            <h3>Double-Opt-In und Opt-Out</h3>
            <p>
              Ihr erhaltet eine sogenannte Double-Opt-In E-Mail, in der Ihr um Bestätigung der Anmeldung gebeten werdet. 
              Ihr könnt dem Empfang der Newsletter jederzeit widersprechen (Opt-Out). 
              Einen Abmeldelink findet Ihr in jedem Newsletter oder in der Double-Opt-In E-Mail.
            </p>
            <h3>Statistiken und Erfolgsmessung</h3>
            <p>
              Um den Newsletter für Euch optimieren zu können, willigt Ihr in meine Auswertung ein, 
              mit der ich messe, wie häufig der Newsletter geöffnet wird und auf welche Links geklickt werden.
            </p>
            <h3>Mehr zum Datenschutz</h3>
            <p>
              Ausführliche Informationen zum Versandverfahren und den Statistiken, 
              sowie zu Euren Widerrufsmöglichkeiten erhaltet Ihr in meiner 
              {" "}
              <a href="/offenlegung-datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>
              .
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default NewsletterPage;
