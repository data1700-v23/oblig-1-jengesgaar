var film = null
var film_feilmelding = null

var antall = null
var antall_feilmelding = null

var fornavn = null
var fornavn_feilmelding = null

var etternavn = null
var etternavn_feilmelding = null

var telefon = null
var telefon_feilmelding = null

var epost = null
var epost_feilmelding = null

validasjon = true

var billetter = [];
<!--Henter data angående billetter og videresender data til funskjoner valider() og vis_billetter()-->
function billett_kjopt(){

    film = String(document.getElementById("film_select").value)
    film_feilmelding = document.getElementById("feil_film")

    antall = document.getElementById("input_antall").value
    antall_feilmelding = document.getElementById("feil_antall")

    fornavn = document.getElementById("input_fornavn").value
    fornavn_feilmelding = document.getElementById("feil_fornavn")

    etternavn = document.getElementById("input_etternavn").value
    etternavn_feilmelding = document.getElementById("feil_etternavn")

    telefon = document.getElementById("input_telefonnr").value
    telefon_feilmelding = document.getElementById("feil_telefonnr")

    epost = document.getElementById("input_epost").value
    epost_feilmelding = document.getElementById("feil_epost")


    validasjon = valider()

    if (validasjon === true){
        billetter.push([fornavn+" "+ etternavn, film, telefon, epost, antall])
        vis_billetter()
    }
}

<!--Sjekker om det er riktig input i inputfeltene-->
function valider(){

    var valid = true

    if (film === "invalid"){

        valid = false
        film_feilmelding.style.visibility = "visible";

    } else{film_feilmelding.style.visibility = "hidden";}

    if (antall === ""||isNaN(antall)){
        antall_feilmelding.style.visibility = "visible";
    }

    else if (antall === "0"){
        valid =  false
        antall_feilmelding.style.visibility = "visible";
    }else{antall_feilmelding.style.visibility = "hidden";}

    if (fornavn === ""){
        valid = false
        fornavn_feilmelding.style.visibility = "visible";
    }else{fornavn_feilmelding.style.visibility = "hidden";}

    if (etternavn === ""){
        valid = false
        etternavn_feilmelding.style.visibility = "visible";
    }else{etternavn_feilmelding.style.visibility = "hidden";}

    if (telefon === ""||isNaN(telefon)){
        valid = false
        telefon_feilmelding.style.visibility = "visible";
    }else{telefon_feilmelding.style.visibility = "hidden";}

    if (epost === ""){
        valid = false
        epost_feilmelding.style.visibility = "visible";
    }else{epost_feilmelding.style.visibility = "hidden";}
    return valid
}

<!--Viser billetter i array. Står tomt hvis array er tomt.-->
function vis_billetter(){
    let ut = "<table><tr<>"+
        "<th>Navn</th><th>Film</th><th>Telefonnr</th>+<th>Epost</th>+<th>Antall</th>"+
        "</tr>"

    var billettregister = document.getElementById("billettregister")

    billetter.forEach(function(subarray){
        ut+="<tr>"

        subarray.forEach(function(item){
            ut+="<td>"+item+"</td>"
        })
        ut += "</tr>"
    })

    billettregister.innerHTML = ut

}

<!--Tømmer array, og kjører vis_billetter()-->
function slett_billetter(){
    billetter = []
    vis_billetter()
}