0)�Hva�er�fordelen�med�et�eksisterende�JavaScript�bibliotek�som�jQuery�i�motsetning�til��
skrive�en��r唠JavaScript�for�dynamisk�endring�av�HTML�sider?

Siden da vet man at koden vil v�re kompatibel med flere forskjellige nettlesere. Hvis man bare bruker
javascript kan man ikke v�re sikker p� at resultatet vil v�re det samme i alle forskjellige
nettlesere. Bruk av jQuery garanterer at resultatet ifra javascript vil produsere det samme
�nskede resultatet i alle moderne popul�re nettlesere blant annet Chrome, Firefox, Opera og Safari.


1)�Les�denne�artikkelen
http://www.ibm.com/developerworks/web/library/wa�htmlmark/index.html�og�svar�p�f�lgende
sp�rsm�l:�Hva�er�sterke�sider�til�HTML/CSS�og�hva�er�sterke�sider�til�Canvas?�I�hvilke
situasjoner�er�det�meningsfult��bruke�Canvas?

HTML/CSS pros:
Denne metoden har veldig sterk st�tte for tekst-manipulering. enten det gjelder heading, oppsett, eller
ting slik som farge.

Canvas pros:
Bruk av Canvas foreg�r veldig raskt, uten � kreve mye av systemet.
Canvas vil se praktisk talt identisk ut p� forskjellige systemer.


Meningsfylt Canvas Scenarioer:
Hvis du av en eller annen grunn har lyst til f� maximum ytelse ut av siden.
Kan bruken av en canvas-fokusert arkitektur hjelpe deg med akkurat det.
En h�y eller ekslusiv fokus p� Canvas vil ogs� hjelpe sterkt til ved � ha et
konsistent utseende for siden uavhengig av plattform og/eller nettleser.


2)�Hvilken�grafisk�presentasjonsm�te�(se�Innledning�til�denne�oppgaven)�hadde�du�sagt�at
HTML5�Canvas�representerer?�Forklar.

Canvas gir deg muligheten til � bruke enten individuelle lag/"layers", tegne geometriske former
slik som linjer og firkanter, eller manipulere hver enkel piksel (s� sant du vet koordinatene dens)
Jeg ville derfor sagt at Canvas representerer den pixelmanipulerende presentasjonsm�ten.


3)�EKSTRA�(bare�for�de�spesielt�interesserte):�en�mangel�p�resultatet�fra�deloppgave�2�er�at
hvis�man�trykker�musen�n�rme�kanten,�kan�man�ikke�se�hele�teksten�siden�den�klippes�vekk
hvis�den�g�r�utover�Canvas�grenser;�hvordan�kunne�man��fikse��p�det�vha.�metodene�fra
jCanvas?


