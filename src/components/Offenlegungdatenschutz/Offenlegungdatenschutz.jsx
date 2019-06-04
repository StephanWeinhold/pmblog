import React, { Component } from "react";
import me from '../../../static/stephan-weinhold.png';

class Offenlegungdatenschutz extends Component {
  render() {
    return (
      <div>
        <img src={me} alt="Stephan Weinhold - Projektmanager und Vortragender aus Salzburg" />        
        <p>
          <address>
            Stephan Weinhold<br />
            5020 Salzburg<br />
            Österreich<br />
            <a href="mailto:stephan.weinhold@projektmanagementblog.de">
              stephan.weinhold@projektmanagementblog.de
            </a>
          </address>
        </p>
        <p>
          <strong>Modernes PM</strong> 
          {" "}
          ist ein Blog über modernes Projektmanagement in all seinen Ausprägungen.
          Er ist unabhängig von Institutionen, Firmen und Interessengruppen.
        </p>
        <h3>Erklärung zur Informationspflicht (Datenschutzerklärung)</h3>
        <p>
          Der Schutz Eurer persönlichen Daten ist mir ein besonderes Anliegen. 
          Aus diesem Grund speichere ich auch Eure Daten nur bei meinem deutschen 
          Hostingpartner und bei keinen anderen externen Anbietern.  
          Ich verarbeite Eure Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
        </p>
        <h3>Kontakt mit mir</h3>
        <p>
          Wenn Ihr per E-Mail Kontakt mit mir aufnehmt, 
          werden Eure angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von 
          Anschlussfragen sechs Monate bei mir gespeichert.   
          Diese Daten gebe ich nicht ohne Eure Einwilligung weiter.
        </p>
        <h3>Cookies</h3>
        <p>
          Ich verwende bewusst nur minimalst Cookies für meinen Blog. 
          Google Analytics, damit ich sehe, was Ihr gerne lest und was weniger. 
          Ansonsten: keine Affiliates, nichts.  
          Dies ist wirklich ein unabhängiger Blog. Vielleicht ist das eine etwas altbackene 
          Betrachtensweise, aber ich will mit Euren Daten kein Geld verdienen.
        </p>
        <p>
          Ich habe auch ganz bewusst keine Social Sharing-Buttons eingebunden. 
          Natürlich freue ich mir sehr, wenn Ihr meine Beiträge teilt! 
          Aber ich traue Euch durchaus zu, das ohne Buttons zu schaffen.
        </p>
        <h3>Web-Analyse</h3>
        <p>
          Meine Website verwendet Funktionen des Webanalysedienstes 
          Google Analytics (Google Ireland Ltd, Gordon House, Barrow Street, Dublin 4, IRLAND). 
          Dazu werden Cookies verwendet, die eine Analyse der Benutzung der Website durch Ihre Benutzer ermöglicht. 
          Die dadurch erzeugten Informationen werden auf den Server des Anbieters (auch USA) übertragen und dort gespeichert.
          Ihr könnt dies verhindern, indem Ihr Euren Browser so einrichtet, dass keine Cookies gespeichert werden.
        </p>
        <p>
          Ich habe mit dem Anbieter einen entsprechenden Vertrag zur Auftragsdatenverarbeitung abgeschlossen.
        </p>
        <p>
          Eure IP-Adresse wird erfasst, aber umgehend (z.B. durch Löschung der letzten 8 Bit) pseudonymisiert. 
          Dadurch ist nur mehr eine grobe Lokalisierung möglich.
        </p>
        <p>
          Die Beziehung zum Webanalyseanbieter basiert auf „Privacy Shield“.
        </p>
        <p>
          Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG 
          sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder f (berechtigtes Interesse) der DSGVO.
        </p>
        <p>
          Mein Anliegen im Sinne der DSGVO ist die Verbesserung meines Angebotes - 
          nur wenn ich weiß, welche Artikel Euch gefallen, kann ich für Euch interessante Sachen schreiben. 
          Da mir Eure Privatsphäre verdammt wichtig ist, werden die Nutzerdaten pseudonymisiert.
        </p>
        <p>
          Die Nutzerdaten werden für die Dauer von maximal 26 Monaten aufbewahrt. 
        </p>
        <h3>Eure Rechte</h3>
        <p>
          Dir steht grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, 
          Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. 
          Wenn Du der Meinung bist, dass die Verarbeitung Deiner Daten gegen das 
          Datenschutzrecht verstößt oder Deine datenschutzrechtlichen Ansprüche sonst in 
          einer Weise verletzt worden sind, kannst Du Dich bei der Aufsichtsbehörde beschweren.  
          In Österreich ist dies die Datenschutzbehörde.
        </p>
        <p>
          Ihr erreicht mich unter folgenden Kontaktdaten:
        </p>
        <p>
          <address>
            Stephan Weinhold<br />
            5020 Salzburg<br />
            Österreich<br />
            <a href="mailto:stephan.weinhold@projektmanagementblog.de">
              stephan.weinhold@projektmanagementblog.de
            </a>
          </address>
        </p>
      </div>
    );
  }
}

export default Offenlegungdatenschutz;
