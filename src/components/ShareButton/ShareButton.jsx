import React, { Component } from "react";
import { Location } from "@reach/router";
import config from "../../../data/SiteConfig";

class ShareButton extends Component {
  componentDidMount() {
    if (navigator.share) {
      document.getElementById('share-button').setAttribute("style", "display: block;");
      this.nv.addEventListener("click", this.handleClick);
    }
  }

  componentWillUnmount() {
    if (navigator.share) {
      this.nv.removeEventListener("click", this.handleClick);
    }
  }

  handleClick = (event) => {
    console.log(location.href);
    if (navigator.share) {
      navigator.share({
        title: config.siteTitle,
        url: location.href,
      }).then(() => {
        console.log('Vielen Dank fürs Teilen!');
      }).catch(console.error);
    }
  }
  
  render() {
    return (
      <div ref={elem => this.nv = elem} className="mt3">
        <button 
          id="share-button" 
          name="share" 
          className="f6 link dim ph3 pv2 mb2 ba bw0 dib white bg-dark-blue"
        >
          <svg 
            id="share-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="dib h1 w1"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
          <span className="f5 ml2 pr2">Diesen Artikel teilen</span>
        </button>
      </div>
    );
  }
}

export default ShareButton;
