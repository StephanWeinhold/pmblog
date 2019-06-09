---
layout: post
draft: false
cover: "./abhaengigkeiten-im-projektmanagement.jpg"
title: "Abhängigkeiten und wie ich sie verstehe und richtig mit ihnen umgehe" 
date: 2018-12-29T20:00:00.000Z
path: /abhaengigkeiten-und-wie-ich-sie verstehe-und-richtig-mit-ihnen-umgehe
category: "projektmanagement"
tags: ["projektmanagement"]
photocredits: "Randy Fath und Fancycrave auf Unsplash"
description: "Wir haben jeden Tag mit Abhängigkeiten zu tun. Aber worum geht es dabei? Und worum geht es dabei wirklich?"
---

Wir haben jeden Tag mit Abhängigkeiten zu tun. Aber worum geht es dabei? Und worum geht es dabei wirklich?

![Abhängigkeiten im Projektmanagement](./abhaengigkeiten-im-projektmanagement.jpg)

### Das Wesentliche

Zuerst - was sind Abhängigkeiten? Das ist relativ schnell geklärt. Abhängigkeiten sind die Beziehungen zwischen meinen Tasks. Wobei “meinen” hier relativ ist. Vor allem bei größeren Projekten muss ich davon ausgehen, dass mehrere Leute an den einzelnen Aufgaben arbeiten. Und hier kommen wir schon zum ersten entscheidenden Punkt: **Abhängigkeiten sind Beziehungen zwischen Menschen.**

Man sollte die Dependencies bei jedem Projekt erheben. Auch, wenn es mühsam ist. Aber nur mit dieser Information kann ich meinen Critical Path berechnen. Und der ist in meinen Augen unabdingbar, wenn ich mein Projekt in den Griff bekommen möchte.

Das ändert alles nichts daran, dass ich die möglichen Abhängigkeiten zwischen zwei Aufgaben (in der Literatur oft - oder eigentlich immer - _Predecessor_ and _Successor_ genannt) in vier Gruppen unterteilen kann.

#### Finish to Start, auch FS genannt

![Abhängigkeit Finish to Start](./abhaengigkeit-finish-to-start.jpg)

Der _Predecessor_ muss beendet sein, bevor ich mit dem _Successor_ beginnen kann. Bevor ich das Haus bauen kann, muss ich mir ein Grundstück kaufen, auf dem es stehen soll. Dieser Abhängigkeit begegnen wir am häufigsten. Wahrscheinlich, weil sie sehr einfach und geradlinig ist.

#### Start to Start (SS)

![Abhängigkeit Start to Start](./abhaengigkeit-start-to-start.jpg)

Das Team muss mit Aufgabe eins begonnen haben, bevor es mit Aufgabe zwei beginnen kann. Bei dieser Abhängigkeit tun sich angehende Projektarbeiter erfahrungsgemäß manchmal etwas schwer, sie so richtig zu verstehen, aber es ist eigentlich recht einfach. Ich kann mit dem Asphaltieren einer Straße in dem Moment beginnen, in dem ich begonnen habe, das Fundament vorzubereiten. Aber eben nicht vorher. Die beiden Aufgaben laufen also nur beinahe parallel ab, Aufgabe eins muss definitiv als erste beginnen.

#### Finish to Finish (FF)

![Abhängigkeit Finish to Finish](./abhaengigkeit-finish-to-finish.jpg)

Task B kann nicht vor Task A beendet werden. Um bei unserem vorherigen Beispiel zu bleiben, kann das Asphaltieren der Straße nicht vor dem Vorbereiten des Fundaments fertig werden. No na ned, wie wir in Österreich so schön sagen. Ist ja logisch.

#### Start to Finish (SF)

![Abhängigkeit Start to Finish](./abhaengigkeit-start-to-finish.jpg)

Die hirnverwindendste und zugleich auch mit Abstand seltenste Abhängigkeit zwischen zwei Tasks. Aber sie kommt dennoch ab und zu vor. Im Grunde ist eine SF-Abhängigkeit die umgedrehte Logik einer FS-Abhängigkeit. Task B kann nicht beendet werden, bevor Task A begonnen hat.

Ich glaube, der Hauptgrund, warum sich viele so schwer mit SF tun, ist, weil die meisten Beispiele dazu komplett falsch sind. Bloß, weil ich eine _Finish to Start_-Abhängigkeit in der umgekehrten (und somit falschen) Reihenfolge formuliere, wird daraus nicht automatisch eine _Start to Finish_-Abhängigkeit. Ein anschauliches (und außerdem korrektes Beispiel) finden in wir in jedem erfolgreich abgeschlossenem Softwareprojekt: die Übergabe. Das Produktivteam muss ein System bereits warten, bevor das Projektteam seine Aufgabe beenden kann.  
Noch ein Beispiel gefällig? Der Nachtwächter kann erst nach Hause gehen, wenn der Manager der Frühschicht im Gebäude ist.

![Abhängigkeiten im agilen Projektmanagement](./abhaengigkeiten-im-agilen-projektmanagement.jpg)

### Von Eseln und Brücken

Eine gute Eselsbrücke und Verständinshilfe ist für mich 

> _Action_, cannot _Rule_.

Bei unserer häufigsten Abhängigkeit - _Finish to Start_ - habe ich also für Task 1 die _Action_ "beenden" und für Task 2 die _Rule_ "beginnen". Task 1 muss beendet sein, sonst kann Task 2 nicht starten.  
Die vier Eselsbrücken sind also:

- FS: finish cannot start
- SS: start cannot start
- FF: finish cannot finish
- SF: start cannot finish

### _"Aber..._

_..ich habe mal wo gelesen, dass es acht potentielle Abhängigkeitsformen im Projektmanagement gibt. Was stimmt denn nun?"_ - Beides. Mehr oder weniger. Um die Verwirrung aufzulösen: ich kann hinter jede meiner vier Dependency-Arten ein (min) oder ein (max) stellen. Also _SF(min)_. Oder _FS(max)_. Damit kann ich eine Mindest- oder Maximalzeit angeben, die zwischen meinen Aktivitäten liegen muss. Normalerweise ist (min) der Standardwert.  
Das Ganze ist also quasi eine Erweiterung meiner Möglichkeiten. In meinen Augen ist diese Option aber mit Vorsicht zu genießen, da sie mir viel von der Intuitivität meiner Abhängigkeitendarstellung nimmt. Aber als zusätzliche Information kann sie - dort, wo es notwendig ist - sehr wertvoll sein.

### Pimp my table

Wenn ich meine Aktivitäten in eine Tabelle verpacke (was ich als PM eigentlich immer machen sollte), kann ich das Thema Abhängigkeiten ganz einfach mit einer zusätzlichen Spalte abbilden. Und eigentlich muss ich nicht mal das machen, weil alle gängigen Projektmanagementprogramme mir diese Arbeit abnehmen.  
So eine Tabelle sieht dann in etwa so aus:

| # | Task | Predecessors |
| --- | --- | --- |
| 1.1 | Architekt suchen | |
| 1.2 | Plan erstellen | 1.1 |
| 2.1 | Grundstück planieren | 1.2 |
| 2.2 | Keller ausheben | 2.1 |
| 2.3 | Fundament legen | 2.2, 2.3 |
| ... | ... | ... |

### Abseits der Zwänge

Bisher haben wir hier nur über _Mandatory Dependencies_ geredet. Also Abhängigkeiten, die auf jeden Fall bestehen. Ich habe aber auch die Möglichkeit, einzelne Abhängigkeiten zu _Discretionary Dependencies_ zu erklären. Das sind solche, wo die Abhängigkeit nicht in Stein gemeißelt ist. Warum sollte ich so etwas wollen? Immer dann, wenn es um Nice to Haves geht. Wenn zum Beispiel das Management einen bestimmten Termin wünscht, aber auch mit einem späteren Fertigstellungsdatum leben kann.  
Auch hier unterstützen die meisten Projektmanagementprogrammen Discretionary Dependencies und bieten mir die Möglichkeit, sowohl meinen Idealtermin, als auch die harte Deadline einer Aufgabe im Auge zu behalten.

### Der Vollständigkeit halber

Und wenn wir hier schon am Vervollständigen sind: es gibt noch eine Unterscheidung meiner Abhängigkeiten. Eine, die wir Projektmanager am liebsten nicht vornehmen müssen. Interne versus externe Dependencies. Kurz zusammengefasst, sind die internen die guten, weil ich hier die Dinge zumindest ein wenig steuern kann. Externe Abhängigkeiten führen hingegen oft zu einem Brechen des Zeitplanes. Trotzdem sind sie bei den meisten großen Projekten an der Tagesordnung.

Hier hilft eigentlich nur eines: Organisation, Organisation und noch mehr Organisation. Externe Abhängigkeiten gehören zeitlich sehr konservativ geschätzt, mit viel Luft. Und dann muss ich einen genauen Überblick behalten, bei welchem externen Vendor ich welche Aufgabe nachhaken muss.

### Das wirklich Wesentliche

Zum Schluß das, was in meinen Augen bei all der Theorie gerne vergessen wird: **Abhängigkeiten gehören geplant und gemanagt, aber vor allem kommuniziert und gelebt.** Es reicht nicht, alles zu erheben, schön in mein MS Project zu klopfen und abzulegen. Das ist zwar die Grundlage. Aber wenn ich es hierbei bleiben lasse, wird es unabdingbar irgendwann im Laufe meines Projektes knallen.

Was nützt es mir als Projektmanager, zu wissen, dass zwei Personen an Tasks arbeiten, zwischen denen Abhängigkeiten bestehen? Genau, nichts. Die handelnden Personen müssen Bescheid wissen. Und dann muss ich regelmäßige Kommunikation zwischen ihnen fazilitieren.  
Und hier hilft mir auch die schönste RACI-Matrix nichts. Sondern es ist wie so oft: es muss einen Kümmerer geben. Und das ist die Projektmanagerin, der Projektmanager. Nur so wird mein Projekt auch ein Erfolg werden können.
