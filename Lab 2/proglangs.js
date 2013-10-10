function ikkeFerdig(sidenavn)
{
//document.getElementById("maintext")
//.innerHTML="<h1>Beklager men "+(sidenavn)+" sortering er under arbeid og ikke ferdig.</h1>";
// ^original løsning. Er visst feil måte.

alert("Beklager men "+(sidenavn)+" sortering er under arbeid og ikke ferdig.");

}

function progLang(pLang)
{
	if (pLang)
	{
	document.getElementById("maintext")
	.innerHTML="<h1>Du har valgt programmeringspråket "+(pLang)+"</h1>";
	}
	//Hvis de har valgt blankt (sannsynligvis etter å allerede ha valgt f.eks BASIC)
	//Vil siden bli lastet inn på nytt igjen, altså samme effekten som å klikke på
	//home-knappen og få tilbake den original teksten.
	else
	{
	window.open('Proglangs.html','_parent');
	}
}
