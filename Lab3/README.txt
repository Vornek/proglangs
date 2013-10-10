0) Hva er fordelen med et eksisterende JavaScript bibliotek som jQuery i motsetning til å
skrive en “rå” JavaScript for dynamisk endring av HTML sider?

Siden da vet man at koden vil være kompatibel med flere forskjellige nettlesere. Hvis man bare bruker
javascript kan man ikke være sikker på at resultatet vil være det samme i alle forskjellige
nettlesere. Bruk av jQuery garanterer at resultatet ifra javascript vil produsere det samme
ønskede resultatet i alle moderne populære nettlesere blant annet Chrome, Firefox, Opera og Safari.


1) Les denne artikkelen
http://www.ibm.com/developerworks/web/library/wa­htmlmark/index.html og svar på følgende
spørsmål: Hva er sterke sider til HTML/CSS og hva er sterke sider til Canvas? I hvilke
situasjoner er det meningsfult å bruke Canvas?

HTML/CSS pros:
Denne metoden har veldig sterk støtte for tekst-manipulering. enten det gjelder heading, oppsett, eller
ting slik som farge.

Canvas pros:
Bruk av Canvas foregår veldig raskt, uten å kreve mye av systemet.
Canvas vil se praktisk talt identisk ut på forskjellige systemer.


Meningsfylt Canvas Scenarioer:
Hvis du av en eller annen grunn har lyst til få maximum ytelse ut av siden.
Kan bruken av en canvas-fokusert arkitektur hjelpe deg med akkurat det.
En høy eller ekslusiv fokus på Canvas vil også hjelpe sterkt til ved å ha et
konsistent utseende for siden uavhengig av plattform og/eller nettleser.


2) Hvilken grafisk presentasjonsmåte (se Innledning til denne oppgaven) hadde du sagt at
HTML5 Canvas representerer? Forklar.

Canvas gir deg muligheten til å bruke enten individuelle lag/"layers", tegne geometriske former
slik som linjer og firkanter, eller manipulere hver enkel piksel (så sant du vet koordinatene dens)
Jeg ville derfor sagt at Canvas representerer den pixelmanipulerende presentasjonsmåten.


3) EKSTRA (bare for de spesielt interesserte): en mangel på resultatet fra deloppgave 2 er at
hvis man trykker musen nærme kanten, kan man ikke se hele teksten siden den klippes vekk
hvis den går utover Canvas grenser; hvordan kunne man “fikse” på det vha. metodene fra
jCanvas?


