import React, { Component } from "react";
import me from '../../../static/stephan-weinhold.png';

class About extends Component {
  render() {
    return (
      <div>
        <img src={me} alt="Stephan Weinhold - Projektmanager und Vortragender aus Salzburg" />        
        <h2>Über Stephan Weinhold</h2>
        <p>        
          <a href="https://stephanweinhold.com">
            <strong>Stephan Weinhold</strong>
          </a> 
          {' '}
          ist ein Projektmanager mit 
          über 15 Jahren Erfahrung im hybriden Projektmanagement, einer Vorliebe für 
          Technologie, und ohne Scheu, anzupacken und Neues auf die Beine zu stellen. 
          Er hat unter anderem Projekte in den Bereichen IT,
          Lebensmitteltechnologie, und Banking in über 20 Ländern gemanagt und beraten.
        </p>
        <p>
          Stephan gibt sein Wissen mit viel Enthusiasmus in Vorträgen, 
          Seminaren und Workshops weiter. Unter anderem für 
          Organisationen wie FIFA, 
          International Association of Exhibitions and Events™ (IAEE), 
          Österreichische Wirtschaftskammer, BFI.  
          Er ist Autor von Fachbeiträgen mit einem Schwerpunkt auf 
          Hybrid Project Management, Agile PMOs, und 
          Projektmanagement in Krisensituationen.
        </p>
        <h2>Über diesen Blog</h2>
        <p>
          Der <strong>Projektmanagementblog</strong> ist ein Blog über modernes Projektmanagement in all seinen Ausprägungen.
          Klassisch, agil, hybrid. Ich schreibe hier meine Gedanken zu den Entwicklungen, 
          Trends, Problemen und Herausforderungen, denen wir in unserem Arbeitsalltag 
          als Projektarbeiter so begegnen und wie die Lösungen dazu in meinen Augen aussehen könnten.
        </p>
      </div>
    );
  }
}

export default About;
