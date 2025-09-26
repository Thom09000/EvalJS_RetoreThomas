//Le fichier JS pour la partie Météo
//import './style.css'
const info=document.createElement("div");
const boutonCharge=document.querySelector("Button");
let parent=boutonCharge.parentNode;

info.style.height= "300px";
info.style.width= "200px";
info.style.marginTop= "16px";
info.style.marginBottom= "16px";
info.style.border= "solid", "3px";
info.style.color= "grey"
info.style.paddingTop= "16px";
info.style.paddingBottom= "24px";
info.style.paddingLeft= "12px";
info.style.paddingRight= "12px";

//setelement
parent.insertBefore(info, boutonCharge)

function addInfo(txt) {
info.innerText=txt
};

function bouton() {
boutonCharge.classList.add("button__cardMeteo");
};

boutonCharge.addEventListener("mousedown", function() {
    boutonCharge.style.backgroundColor="orange";
 });

document.addEventListener("mouseup", function() {
    boutonCharge.style.backgroundColor= "cornflowerblue"
 });


  for (let i=1; i<5; i++) {
    const divh2=document.createElement("div");

    divh2.textContent="";
    divh2.style.width="auto";
    divh2.style.height="75px";

    divh2.style.textAlign="center";
    divh2.style.alignContent="center";
    divh2.style.paddingTop="1px";
    divh2.style.paddingBottom="1px";
    divh2.setAttribute("id", "id_title"+i);

    info.appendChild(divh2);
}  
const divH2Id1=document.getElementById("id_title1");
const divH2Id2=document.getElementById("id_title2");
const divH2Id3=document.getElementById("id_title3");
const divH2Id4=document.getElementById("id_title4");

// Mise en place API meteo-------------------------------------------------

const getMeteoJson = async () =>{
	return await fetch("https://prevision-meteo.ch/services/json/toulouse")
		.then(response => {
// Test de la reponse API--------------------------------------------------------
            if (response.status==200)
            {
			return response.json();
            }
            if (response.status!=200) {
// dont/retour de la reponse API----------------------------------------------------------
            return response
            }
		});
}

//Appel de la méthode (traitement)------------------------------------------------------


boutonCharge.addEventListener("click", function () {
    getMeteoJson(info.value).then(json/*nom que l'on veut mettre*/ => {

        if (info.value!="") {
            if (json.status == undefined) {
                // console.log(json.name)
                divH2Id1.innerText=json.current_condition.condition;
                divH2Id2.innerText=json.current_condition.tmp;
                divH2Id3.innerText=json.fcst_day_0.tmax;
                divH2Id4.innerText=json.fcst_day_0.tmin;
                bouton();
            }
        }

        // else if (inputVille.value=="") {
        //     divH2Id1.innerText="Le champs est vide";
        // };

    });

});