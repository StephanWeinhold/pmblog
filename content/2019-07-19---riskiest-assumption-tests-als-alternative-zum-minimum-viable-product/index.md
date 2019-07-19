---
layout: post
draft: true
cover: "./minimum-viable-product.jpg"
title: "Riskiest Asumption Tests als Alternative zum Minimum Viable Product"
date: 2019-07-19T20:00:00.000Z
path: /riskiest-assumption-tests-als-alternative-zum-minimum-viable-product
category: "agilität"
tags: ["rat", "mvp"]
photocredits: "Henrik Kniberg auf blog.crisp.se, beziehungsweise Nicolas Thomas und Mert Guller auf Unsplash"
description: "Ist das Minimum Viable Product wirklich der Weisheit letzter Schluß? Gedanken zu MVP und Riskiest Assumption Tests."
---

Ist das Minimum Viable Product wirklich der Weisheit letzter Schluß? Gedanken zu MVP und Riskiest Assumption Tests.

![Henrik Kniberg Minimum Viable Product](./minimum-viable-product.jpg)

### Immer diese Missverständnisse

Einige von Euch kennen sicher diese Zeichnung von [Henrik Kniberg](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp) zum Thema _Minimum Viable Product_. (Henrik ist übrigens im Brotberuf Softwareentwickler beim meistverkauften Videospiel aller Zeiten - Minecraft. Damit wir auch genügend unnützes Wissen sammeln.) Und an sich und theoretisch ist dieses MVP gar keine so schlechte Idee. Aber wie so oft, wenn unsere geliebten Scrum-agilitäts-buzzword-coaches involviert sind, handelt es sich am Ende um ein einziges großes Missverständnis. Und wie so oft, gibt es eigentlich eine Alternative, die in vielen Fällen eigentlich besser geeignet ist, um iterativ und inkrementell Produkte zu erzeugen: _Riskiest Assumption Tests_, kurz RAT. Diejenigen, denen es nur wichtig ist, möglichst kompetent zu wirken, sollten in nächster Zeit den Begriff RAT so oft wie möglich in ihre Sätze einbauen, bevor es zum nächsten Buzzword wird und können ansonsten hier aufhören zu lesen. Alle anderen erfahren jetzt mehr darüber. Ihr seid noch alle an Bord? Sehr schön!

### Minimum Viable Product

Bevor wir über schöne glänzende neue Dinge reden, sollten wir sicherstellen, dass wir alle auf dem selben Stand sind. Was ist ein MVP? Ohne jetzt klugscheißern (Verzeiht meine Wortwahl!) zu wollen, aber ich habe schon oft erlebt, dass Teams an genau dieser Frage gescheitert sind, weil keiner übersetzt hat, was das wortwörtlich überhaupt bedeutet. Das MVP ist das “minimal überlebensfähige Produkt”. Die Idee dahinter ist schnell erklärt. Geprägt wurde der Ausdruck 2001 von Frank Robinson, der sich, angeregt durch das Platzen der dot-com bubble kurz zuvor und auf Basis der _Sharp Ratio_ - vereinfacht eine Return-on-Risk Analysis -, Gedanken gemacht hat, wie man seinem Kunden ein Produkt übergibt, das gerade genug Features hat, um überlebensfähig zu sein. Also maximaler Gewinn mit minimalem Risiko.

### Und was ist jetzt suboptimal an so einem MVP?

Die Idee per se ist ja wie gesagt nichts Schlechtes - ganz im Gegenteil! Aber selbst sein Erfinder sagt über das Konzept des MVP:

> “Too large or too small a product are big problems. The MVP is the difficult-to-determine sweet spot between them. Teams flounder tactically in trying to determine the MVP.”  
>   
> _”Ein zu großes oder zu kleines Produkt ist ein riesen Problem. Das MVP ist der schwer zu findende Sweetspot dazwischen. Teams stolpern taktisch beim Versuch, den MVP zu bestimmen.”_ - Frank Robinson

Die Umsetzung ist also, wie so oft, das Problem. Das Missverständnis, dass das MVP die Minimalvariante eines Produktes ist. Quasi einfach so hingerotzt. Und nicht genug, sehe ich auch oft Organisationen bei dem Versuch, nach MVP zu arbeiten, in den _Product Death Cycle_ rutschen.

https://twitter.com/davidjbland/status/467096015318036480?lang=en

Und selbst, wenn die Umsetzung klappen sollte. Selbst, wenn das Mindset als solches erkannt und gelebt wird, funktioniert das MVP oft nicht wirklich. Denn so ein Minimum Viable Product ist ja per definitionem arm an Features. Bei neuen Produkten stellt das kein großes Problem dar. Aber wir bewegen uns in 99,9-periodisch% der Fälle in Bereichen, in denen es einen Mitbewerb gibt. Und da setzt sich auf Dauer das Produkt mit den sinnvollsten Features und der höchsten Qualität durch. Und nicht das MVP.

![Test fast](./test-fast.jpg)

### Der Weg zu Riskiest Assumption Tests

Vor allem Softwareentwickler sind schnell darauf gekommen, dass das MVP zwar ein tolles Konzept ist, das aber eben durchaus seine Schwächen hat. Also hat man versucht, die Idee MVP weiter zu entwickeln. Auftritt _Minimum Viable Experiment_. Das MVE nimmt ein MVP, um damit eine Produktidee zu evaluieren. Frei nach der Prämisse, “Keiner erwartet von einem Experiment, dass es ein voller Erfolg wird.” Das klingt auf den ersten Blick kompliziert, auf den zweiten merkt man, dass das MVE nichts anderes, als das gute alte Bananenprinzip ist.  
Aufmerksamkeit hat auch das _Minimum Awesome Product_ erhalten. Wer dahinter einen Haufen Buzzwords, heiße Luft, und Marketinggeschwurbel vermutet, liegt in meinen Augen komplett richtig. Die Grundidee hinter dem MAP ist, dass das “minimal Machbare” nicht genügt, um auf dem Markt zu bestehen. Wer von Euch vorhin gut aufgepasst hat, weiß, dass hier jemand das Konzept hinter dem Minimum Viable Product nicht verstanden hat. Keine gute Grundvoraussetzung, um etwas weiter zu entwickeln, wenn Ihr mich fragt.  
Weitere Ideen sind zum Beispiel das _Minimum Valuable Product_, oder das _Minimum Lovable Product_. Alles hinter der Sorge, der Kunde könnte meinen, das MVP ist kein vollwertiges Produkt, sondern ein wertloser Prototyp. Das sind zwar Lösungsansätze, aber in meinen Augen in die komplett und vollkommen falsche Richtung.

![RAT Riskiest Assumption Test](./rat-riskiest-assumption-test.jpg)

### I see RATs.

Riskiest Assumption Tests also. RATs. Ich weiß nicht, ob Rik Higham das Konzept erfunden hat, aber bei ihm habe ich das erste Mal davon gehört. Rik stellt eine einfache Frage:

> “What’s the smallest experiment you can do to test your biggest assumption?”

Wenn man ein neues Produkt generiert, hat man dazu Anfangs einen ganzen Haufen Annahmen. Wir Projektarbeiter haben dafür sogar ein eigenes Tool, den _Assumptions Log_. Der große Nachteil von so Annahmen ist, dass man eben nichts genaueres darüber weiß. Also nimmt man zu Beginn die Annahme, bei der man das größte Risiko sieht, und testet sie. Ohne großen Aufwand, sondern eben so einfach wie möglich. _Test early_ statt _Fail early_ sozusagen. (Das sollte ich auf T-Shirts drucken lassen, ich weiß.)

Das heißt, ich baue ein Produkt, das meine Annahme testet. Schnell und einfach und kostengünstig. Beispiel gefällig? Google Glass. So eine smarte Brille ist ein wahnsinnig kompliziertes und vor allem komplexes Ding. Nicht nur die Technik, sondern auch das ganze Drumherum. Rechtliches, Kulturelles, Soziales. Was glaubt Ihr, wie lange hat es gedauert, bis der erste Google Glass-Prototyp fertig war? Ich sags Euch: einen Tag. 1 Tag. (Tom Chi ist übrigens der mutige Produktentwickler in diesem Fall.) Da sind wir sehr nahe beim Rapid Prototyping und das sollten wir uns auch öfter zum Vorbild nehmen. Wenn Ihr eine Idee habt, Euch aber nicht sicher seid, ob diese funktioniert: einfach schnell was zusammenbasteln und Eure Annahmen testen.

### Ist MVP jetzt also eine schlechte Herangehensweise?

Nein. Zumindest nicht, wenn es richtig interpretiert - als Mindset in der Produktentwicklung - und gelebt wird. Und, wenn man eine strategische Herangehensweise wählt. Ich denke, man fährt mit einer ähnlichen Variante wie der hier recht gut:

1. Den Kundenwunsch analysieren und verstehen.
2. Epics und darauf basierende User Stories schreiben.
3. Das Produkt in sinnvolle Häppchen zerlegen. (Eine Story Map bietet sich hier an.)
4. Eine _Incremental Release Roadmap_ erstellen.

Wenn ich so vorgehe und auf meine Kunden höre, werde ich mein MVP in einem der ersten Sprints erstellt haben. Ihr merkt, das ist keine Sache, die man schnell mal in einem Refinement erledigt hat. Das ist richtig harte (Produktentwicklungs-)Arbeit.

Und hier sind Riskiest Assumption Tests eine gute Alternative, wenn ich schnell und effizient meine Annahmen testen möchte Traut Euch ruhig öfter drüber.
