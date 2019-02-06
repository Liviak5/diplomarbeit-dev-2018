# Projekt: Festival Lovers
Diplomarbeit von Livia Kobler

## Management Summary

Ich habe für meine Diplomarbeit ein Szenario angenommen, dass der Kunde ein Prototyp von einer Festivalseite will, die frühestens in einem Jahr live gehen kann. SocialMedia-Sharing und Dashboard sollen zu einem späteren Zeitpunkt noch dazu kommen.
Das durchdachte Layout des Designers soll möglichst genau umgesetzt werden und es soll eine Technologie eingesetzt werden, die sich wahrscheinlich durchsetzen wird oder leicht in ein neues System integrieren lassen kann.

Ich habe meinen Prototyp darum so weit wie möglich komponentisiert, weil anzunehmen ist, dass die einzelnen Seiten noch umgestellt werden und einzelne Komponenten an andere Orte geschoben werden.
Ausserdem habe ich durch die Komponenten die Möglichkeit, dem übernehmenden Developper kleine übersichtliche Code-Dateien mitzugeben, die er leicht den einzeinen Komponenten zu ordnen und übernehmen kann (z.B in vue.js oder polymer)
Mit Vanilla JS schränke ich den nächsten Entwickler nicht in der Wahl der Technologie ein.
Mit Paninis-Handlebars wird genau angezeigt, welche Komponenten, wo noch Informationen benötigen. Auch das wird dem nächsten Entwickler helfen schnell umzusetzen.
Meiner Meinung nach, wird sich Grid-Layout in einem Jahr auch bei Edges und evtl. IE11 soweit verbessert haben, dass sich die Seiten da auch problemlos anschauen lassen, wir können es wagen fürs Projekt alle Vorteile des CSS Grid-Layouts schon zu nutzen.
So können wir auch dem komplexen Layout des Designers gerecht werden.


 
 ## Installation
 
 - Download Repository
 - run ```npm install```
 
 ## use
 
 - run ```gulp dev```
 
 ## lauffähige Version
 https:// kobliv.ch

## Technologiewahl
### Anforderungen

Für dieses Projekt sind mir folgende Anforderungen wichtig für die Umsetzung

- Partials oder Komponenten müssen erstellt werden können, damit ein sich wiederholendes Element nicht immer wieder neu gesetzt werden muss.
- Code muss unkompliziert an freiwählbares Backend-System angehängt werden können
- es soll kein unnötiger Overhead generiert werden, der fürs Projekt nicht nötig ist
- Code muss übersichtlich und strukturiert gesetzt werden können
- Arbeit muss schnell und effizient umgesetzt und erlernt werden können, für jemand der das Projekt ggf. übernehmen muss
- Durch Variablen sollen wo möglich Wiederholungen und wiedersprüchlicher Code verhindert werden können _(Farben, Schriften, Spacer)_
- Tools, die die Arbeit erleichtern sollen unkompliziert hinzugefügt werden können
- Code muss auf dem neuesten Stand sein _(lieber jetzt schon neue Technologie einsetzen, sofern sie auf den geforderten Browsern funktioniert, als später umbauen, wenn die alte nicht mehr läuft)_

### Wahl

Ich habe mich für folgende Tools/Technologien entschieden:

- Static Site Generator
- Gulp (Sass und Sass-Watch, Browser-Sync, Babel, ggf. Mocha und Chai, build, evtl. weitere)
- Linter (ES6, Stylelint)
- SCSS (Grid-Layout)
- ES6
- zu überlegen für Slider: Slick-Slider oder selbst bauen (beides schlanke Varianten)

### Begründung

#### Warum kein Framework, das mir die Arbeit erleichtern würde?

CSS: 
- zu viel Code, der fürs Projekt nicht benötigt wird und das Volumen des Projekts vergrössert
- mit CSS-Grid-Layout, ist für mich der einzige Grund verloren ein Framework zu benutzen

Components/JS:
- Angular: 
    - Zu komplizierte, vorgeschriebene Struktur
    - zu viele verschachtelte Ordner und zu viele Funktionen, die nicht benötigt werden
    - Versionswechsel sind nicht immer nur Features (Risiko: Kompatibilität?)
    - wenn Projekt übernommen wird, müssen Kenntnisse von Angular erlernt werden _(hoher Aufwand)_
- Vue:
    - viele Funktionen, die nicht benötigt werden
    - Struktur ist vorgeschrieben
    - wenn Projekt übernommen wird, müssen Kenntnisse von vue erlernt werden _(mässiger Aufwand)_
- Polymer:
    - Style und HTML müssen in der aktuellsten Version als JS geschrieben werden, was mir zu unübersichtlich ist.
    - Version ist zwar abwärtskompatibel, aber wie lange kann diese noch verwendet werden und ist es sinnvoll alte Technologie einzusetzen?
    - wenn Projekt übernommen wird, müssen Kenntnisse von Polymer erlernt werden _(mässiger bis hoher Aufwand)_

#### Vorteile der ausgewählten Variante?

- Es können Komponenten/Partials verwendet werden
- Fürs Backend bin ich frei zu entscheiden in welchem System ich später weiterarbeiten möchte.
- Code kann sehr schnell übernommen werden in eine andere Technologie
- Struktur ist frei wählbar
- kann beliebig erweitert werden mit nötigen Tools
- Es kann schlank umgesetzt werden, gerade so wie es das Projekt erfordert

## Timetable

 Monat     |   Woche   |    n Tage |    Arbeit  
 -------   |-----------|-----------|--------------------------------
 Juni      |   4       |    3      |    Technologiewahl & Timetable
 Juli      |   1       |    1      |    Technologie/Tools einrichten
 Juli      |   1       |    3      |    Technologie/Tools antesten, ob schwierige Elemente umsetzbar sind & Tools optimieren
 Juli      |   2       |    0.5    |    Basics umsetzen (Typo, Grid, Colour)
 Juli      |   2       |    1      |    Header, Footer, Buttons, Navigation umsetzen
 Juli      |   2       |    0.5    |    Leadtexte, Magazin
 Juli      |   2       |    0.5    |    News/Social Media Posts
 Juli      |   3       |    0.5    |    Login umsetzen
 Juli      |   3       |    0.5    |    Filter umsetzen
 Juli      |   4       |    0.5    |    Breadcrumb mit Filter
 Juli      |   4       |    0.5    |    Banner
 Juli      |   4       |    0.5    |    Sortbar/Overviewlist
 Juli      |   4       |    0.5    |    Kacheln/Listelement
 Juli      |   4       |    0.25   |    Detail-Header
 Juli      |   4       |    0.25   |    LiveInfobar
 Juli      |   4       |    0.5    |    LineUp
 Juli      |   4       |    0.5    |    Content
 Juli      |   4       |    1      |    Map
 August    |   1       |    1      |    Slider / Ticket-Teaser
 August    |   1       |    0.5    |    Next- / Previous-Festival
 August    |   1       |    1      |    SocialMedia-Sharing
 August    |   1       |    0.5    |    Ticketoverview
 August    |   1       |    0.5    |    Progresstraker für Tickets
 August    |   1       |    0.5    |    Ticket-Cards
 August    |   1       |    0.5    |    Ticket-Detail-Content
 August    |   2       |    1      |    Bestellprozess
 August    |   3       |    1      |    Tests
 August    |   3       |    3      |    Korrektur aus Tests
 August    |   3       |    1      |    Schlussdoku
 August    |   4       |    5      |    Puffer

## Technische Dokumentation

### Struktur/Aufbau:
So viel wie möglich ist in Komponenten auf gebaut, damit diese wieder verwendet werden können
sollte eine Seite mit einer anderen Komponente ergänzt werden und um die Übersichtlichkeit des Codes zu gewährleisten.

Zu jeder Komponente gehört:

-   ein html-File: 
    
    zu finden unter **src/**
    - layouts (Grundlayout)
    - pages (einzelne Seiten)
    - partials (einzelne Komponenten)

-   ein scss-File: 
    
    zu finden unter **src/assets/scss**
    main.scss (fasst alle Stylings zusammen)
    - basics (beinhaltet Stylings, die für verschiedene Komponenten verwendet werden können)
    - layouts (beinhaltet Stylings fürs Grundlayout)
    - pages (beinhaltet Stylings für die einzelnen Seiten)
    - partials (beinhaltet Stylings für die einzelnen Komponenten)
    
-   ein js-File:

    zufinden unter **src/assets/js**
    
    - 01_helpers (alle Funktionen, die mehrer Komponenten verwenden)
    - 02_imagesloaded.pkgd.min ist ein runtergeladenes Package von `https://imagesloaded.desandro.com/`, welches für masonry gebraucht wird
    - die restlichen js-Files sind nach den Komponenten benannt
    

## persönliche Anmerkung

Ich habe vieles in diesem Projekt ausprobiert, was ich nicht mehr so umsetzen würde. Ich habe z.B. sehr grossen Respekt vor dem Programmieren eines Sliders gehabt.
Diese Angst wollte ich mir nehmen und das habe ich mit der Arbeit geschafft. Ich habe dadurch aber viel Zeit verloren und damit auch einen Slider geschaffen, der nicht meinen Anforderungen entspricht. Nächstes Mal würde ich einen schlanken Slider wie Slickslider nehmen und ihn abändern.

Am meisten Zeit hat mich gekostet und ich empfand am schwierigsten, das Suchen von geeigneten Variablen-, Funktions- , Klassen- und Id-Namen. Ich habe oft alles wieder umgeschrieben, weil mir der Aufbau nicht gefallen hat oder mir die Namen in die Quere kamen oder ich entdeckt habe, wenn ich gleiche Namen für Gleiches verwende, ich Code einsparen kann.
Ich habe mich auch in vielen Komponenten in der Zeit völlig verschätzt und würde daher von Anfang an viel mehr Zeit berechnen. Je einfacher eine Komponente aussah, desto komplizierter war sie in der Regel. Also mein Lessons learned: kein Design unterschätzen, Struktur und Aufbau noch detailierter im Voraus überlegen und fertige Komponenten nutzen, wenn vorhanden.


Was ich sofort wieder so machen würde, an manchen Stellen so gar noch mehr. Ist das komponentisieren des Designs. Es macht den Code so sehr übersichtlich, dass es einfacher war Bugs zu beheben oder zu entdecken, dafür war ich wirklich oft sehr dankbar.
Ich würde auch Panini immer wieder für einfache Seite einsetzen. Eine coole Erfahrung damit zu arbeiten, aber für so eine komplexe Geschichte wie FestivalLovers würde ich vue.js im Nachhinein bevorzugen.

Ich habe viel gelernt bei dieser Arbeit und es hat Spass gemacht sich mal richtig reinzuhängen. Mehr Zeit und mehr Strom in Schottland wären aber doch cool gewesen :-)

## Eidesstattliche Erklärung
Hiermit erkläre ich, dass ich die Diplomarbeit selbständig verfasst / programmiert und keine anderen als die angegebenen Quellen und Hilfsmittel benutzt und die aus fremden Quellen direkt oder indirekt übernommenen Gedanken als solche kenntlich gemacht habe. Die Arbeit habe ich bisher keinem anderen Prüfungsgremium in gleicher oder vergleichbarer Form vorgelegt. Sie wurde bisher auch nicht veröffentlicht.
