import React from "react";
import Helmet from "react-helmet";
import ScrollTop from "react-scrolltop-button";
import CookieConsent from "react-cookie-consent";
import config from "../../data/SiteConfig";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="helvetica system-sans-serif">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{config.siteTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={config.siteDescription} />
          <link rel="icon" href="/logos/favicon.png" />
          <link rel="stylesheet" href="/tachyons.min.css" />
        </Helmet>
        
        <style dangerouslySetInnerHTML={{__html: `
          .tag:before,
          .category:before {
            content: "#";
          }
          
          .nav-lh {
            line-height: 2em;
          }
          
          #prefooter {
            background-image: url('../../bg_scribble.jpg');
          }
        `}} 
        />
        
        <section className="w-100 bb b--light-silver">
          <header className="dt-l center w-90 w-60-ns pa1">
            <a href="https://www.projectmanagement.com/blog/Modern-PM" className="fr link mt3 pv1 ph2 underline-hover bg-blue white" title="English version">en</a>
          
            <a className="link" href="/" title="{config.siteTitle}">
              <h1 className="mv2 f4 black-90">{config.siteTitle}</h1>
            </a>
            <h2 className="mv2 normal f6 black-50">{config.siteDescription}</h2>
          </header>
        </section>
        
        <section className="w-100">
          <nav className="nav-lh dt center w-90 w-60-ns pv3">
            <a href="/" className="link mr3 pv1 ph2 underline-hover bg-dark-blue white">Alle Artikel</a>
            <a href="/kategorien" className="link mr3 pv1 ph2 underline-hover bg-gold white">#Kategorien</a>
            <a href="/themen" className="dn di-ns link mr3 pv1 ph2 underline-hover bg-green white">#Themen</a>
            <a href="/newsletter" className="link mr3 pv1 ph2 underline-hover bg-red white">Newsletter</a>
            <a href="/stephan-weinhold" className="dn di-ns link mr3 pv1 ph2 underline-hover bg-light-purple white">Über mich</a>
          </nav>
        </section>
        
        <section className="w-100">
          <main className="center w-90 w-60-ns">
            
            {children}
            
          </main>
        </section>
        
        <section id="prefooter" className="w-100 mt4 cover bg-blue">
          <div className="center w-90 w-60-ns pv3">
            <form 
              id="newsletter-anmeldung-footer" 
              name="newsletter-anmeldung-footer" 
              method="GET" 
              action="/newsletter" 
              className="black-90"
            >
              <p>
                <span className="b">
                  Du willst keinen Artikel mehr verpassen? Hier kannst Du Dich für meinen Newsletter anmelden.
                </span>
              </p>
              <input name="m" id="email-footer" placeholder="E-Mailadresse" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" />
              <input type="submit" className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray" />
            </form>
          </div>
        </section>
        
        <section className="w-100 bg-navy">
          <footer className="center w-90 w-60-ns pv4">
            <div className="cf ph2-ns">
              <div className="fl w-100 w-50-ns overflow-hidden">
                <nav className="mv1">
                  <ul className="list pl0">
                    <li className="mb3">
                      <a href={`mailto:${config.userEmail}`} className="link mr3 white underline-hover">
                        {config.userEmail}
                      </a>
                    </li>
                    <li className="mb3">
                      <a href="/stephan-weinhold" className="link mr3 white underline-hover">Über mich</a>
                    </li>
                    <li className="mb3">
                      <a href="/offenlegung-datenschutz" className="link mr3 white underline-hover">Offenlegung / Datenschutz</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="fl w-100 w-50-ns mv2 pl2">
                <nav>
                  <a className="link hover-silver white mr3" href="/rss.xml" title="RSS">
                    <svg className="h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                      <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
                    </svg>
                  </a>
                  <a className="link hover-silver white mr3" href="https://www.linkedin.com/in/stephanweinhold" title="LinkedIn">
                    <svg className="h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                      <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" />
                    </svg>
                  </a>
                  <a className="link hover-silver white mr3" href="https://www.xing.com/profile/Stephan_Weinhold" title="Xing">
                    <svg className="h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                      <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z" />
                    </svg>
                  </a>
                  <a className="link hover-silver white mr3" href="https://www.twitter.com/StephanWeinhold" title="Twitter">
                    <svg className="h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                      <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
                  
            <p className="f7 white mb3 ph2-ns">
                Copyright © Stephan Weinhold 2019 &#8226; Ich hoffe, Ihr habt einen wunderbaren Tag!
            </p>
          </footer>
        </section>

        <ScrollTop
          text="nach oben"
          style={
            {
              right: "5%",
              bottom: "10%",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
              borderRadius: "0",
              border: "1px solid #00449e",
              fontWeight: "normal",
              transition: "color .15s ease-in",
            }
          }
          className="f6 link dim ba ph3 pv2 mb2 dib dark-blue"
        />

        <CookieConsent
          location="bottom"
          buttonText="Alles klar."
          style={{ background: "#0065bd" }}
          buttonStyle={{ margin: "6px 16px", padding: "6px 12px" }}
          contentStyle={{ margin: "12px 16px" }}
        >
          Diese Seite verwendet Google Analytics.
          {" "}
          Das bedeuted, ggf. wird ein Cookie gesetzt.
          {" "}
          <a href="/offenlegung-datenschutz/">
            Hier findest Du meine Datenschutzrichtline
          </a>
          .
        </CookieConsent>
      </div>
    );
  }
}
