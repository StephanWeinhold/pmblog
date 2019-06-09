---
layout: post
draft: false
cover: "./pimp-my-burn-down-chart.jpg"
title: "Pimp my Burn-Down-Chart" 
date: 2018-10-12T16:00:00.000Z
path: /pimp-my-burn-down-chart
category: "tippsUndTricks"
tags: ["scrum", "measurement"]
photocredits: "Malcolm Lightbody auf Unsplash"
description: "Wie wir unsere nichtssagenden (und oft auch langweiligen) Burn-Down-Charts Schritt für Schritt evolutionieren können."
---

Wie wir unsere nichtssagenden (und oft auch langweiligen) Burn-Down-Charts Schritt für Schritt evolutionieren können.

![Improve burn-down-chart](./pimp-my-burn-down-chart.jpg)

### Am Anfang war das Burn-Down-Chart

Jeder, der schon einmal den Teamraum eines Scrum-Teams betreten hat, kennt sie: [Burn-Down-Charts](https://en.wikipedia.org/wiki/Burn_down_chart). Aber auch im Prozess-, klassischen Projekt-, und Lean Management und vielen agilen Methoden sind sie weit verbreitet. Und an und für sich sind sie eine gute Sache. Burn-Down-Charts sind eine einfache und vor allem intuitive (Stichwort _low tech, high touch_) Methode, um erledigte Arbeit zu messen.  
Aber in meinen Augen haben sie ein paar große Schwächen. Und Ihr habt das sicher bereits öfter erlebt, dass die Burndowns in vielen Teams eher lustlos und nur aus Pflichtbewusstsein gepflegt werden und ein tristes Dasein auf irgendeiner Pinnwand fristen. Warum finde ich sie eher subotimal?

1. Burn-Down-Charts verschleiern wesentliche Informationen. Das kann bis zur Verfälschung gehen. Denn bei jeder Veränderung nach unten weiß ich nicht, ob das alles _done_ ist, oder ob da noch was nachgezogen wurde. Und bei jeder Veränderung nach oben, sehe ich nicht, ob das alles Story Points sind, die nachgezogen wurden, oder ob da nicht auch was erledigt wurde. Wie denn auch? Ich hab ja nur die eine Linie, um Information zu transportieren.  
Und ja, ich weiß, das Nachziehen von User Stories ist theoretisch die absolute Ausnahme und kommt nie vor. Praktisch ist es Alltag.
2. Es gibt Teams, die “_burnen_” gerne. Und die werden dann - vor allem, wenn es dem Ende eines Sprints zugeht und noch viel unerledigt ist - durch so ein Burn-Down-Chart ganz gern dazu verleitet, eine an sich kleine Story hoch zu schätzen und nachzuziehen, damit die Linie ohne viel Aufwand einen großen Schritt nach unten macht. Und wenn der Scrum Master dann auch noch daneben steht und ruft “Yay! Burnen! Schneller, schneller!”, habe ich ganz schnell ein Team, das komplett verlernt hat, richtig zu schätzen.
3. Burndowns sind demotivierend. Alle guten Linien zeigen nach oben. Börsenkurse, Lebenserwartung, Sommerwetter. Und wenn ich etwas erledigt habe und in Hochstimmung bin, will ich nichts nach unten zeichnen müssen.

### Also auf nach oben!

Drehen wir also das ganze um und zeichnen wir nach oben. Das hat vor allem einen großen Vorteil: ein Burn-Up-Chart hat zwei Linien und enthält somit doppelt so viele Informationen wie ein Burn-Down-Diagramm. Einmal sehe ich, wieviel Arbeit ich erledigen muss (bzw. zu wieviel Arbeit ich mich als Team commited habe). Und dann sehe ich an der zweiten Linie, wieviel Arbeit ich bereits erledigt habe. Sprich, Änderungen am Scope sind sofort sichtbar. Und Änderungen an der getanenen Arbeit sind eindeutig.

Burn-Up-Charts sind natürlich ein klein wenig mehr Wartungsaufwand als Burn-Down-Charts (ich muss jeden Tag zwei Linien weiterführen, statt einer). Aber das ist meiner Erfahrung nach vernachlässigbar. Dafür habe ich den riesengroßen Vorteil, dass ich die Mehrdeutigkeit los bin. Und das bei gleich bleibender Intuitivität. Und wer sich - so wie ich - durch eine nach unten zeigende Linie demotiviert fühlt, für den sind sie ein zusätzlicher Segen.

Wenn in meinem Scrum-Team alles optimal läuft (so richtig perfekt wird es eh nie sein, aber wenn es bauchgefühlmäßig einfach gerade passt), bin ich hier fertig. Wenn ich aber das Gefühl habe, dass die Velocity eines Teams nicht ideal ist, oder wenn ich dem Team diese leichte Schieflage visualisieren möchte, kann ich hier mit meinem Ablaufdiagramm noch weiter gehen.

### Alle guten Dinge sind drei

Jetzt haben wir vorhin gesagt, dass zwei Linien in meinem Diagramm doppelt so viele Informationen enthalten, wie eine Linie. Fügen wir also noch eine dritte Linie hinzu: Yay, dreimal so viel Informationen!  
Aber was wollen wir mit dieser dritten Linie messen? Tests. Genauer genommen, die Testspalte unseres Scrum-/Kanban/Agile-Boards. Ja, das ist nicht mehr intuitiv. Und ja, das täglich pflegen zu müssen, ist dann schon ein wenig mehr Aufwand. Und damit mein Burn-Up-Diagramm dann noch Sinn macht, muss ich die Linien quasi stapeln. Die unterste Linie ist die Arbeit, die _done_ ist. Die Linie darüber ist die erledigte Arbeit plus die Story Points, die gerade getestet werden. Und die dritte, oberste Linie, ist meine zu erledigende Arbeit.

Wer sich mit Kanban beschäftigt, weiß genau, auf was ich hier hinaus will: ich will mein Team dazu bringen, ein _Cumulative Flow Diagram_ für den aktuellen Sprint zu erstellen.

### Aus Linien werden Flächen

Egal, ob ich jetzt den täglichen Fortschritt in Stufen weiter zeichne, oder als Linie. Auf jeden Fall habe ich unter meinen Linien viel weiße Flächen. Und wenn ich diese weißen Flächen in der Farbe der jeweiligen oberen Linie ausmale, habe ich...

### E voila!

..ein CFD. [Cumulative Flow Diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).

### Aber ich hab doch JIRA, warum soll ich da noch zeichen?

Ja, das ist ein sehr rudimentäres CFD. Und ja, es ist nicht länger fortlaufend, sondern nur für die Dauer eines Sprints. Aber es wird vom Team gezeichnet. Außerdem hatten wir vorhin bereits _low tech, high touch_ erwähnt. Und für mich ist dieses Schmalspur-CFD auch keine ständige Maßnahme. Das mache ich wie gesagt, wenn ich das Bauchgefühl habe, dass die Velocity eines Teams aktuell nicht so optimal ist. Und in so einem Fall ist es perfekt geeignet, die Problematik zu visualisieren. Und damit habe ich dann ein sehr mächtiges Werkzeug, um mit meinem Team gemeinsam die Organisation der Arbeit zu optimieren.
