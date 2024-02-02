let film = null
let film_feilmelding = null

let antall = null
let antall_feilmelding = null

let fornavn = null
let fornavn_feilmelding = null

let etternavn = null
let etternavn_feilmelding = null

let telefon = null
let telefon_feilmelding = null

let epost = null
let epost_feilmelding = null

let billetter = [];

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


    let validasjon = valider()

    if (validasjon === true){
        billetter.push([fornavn+" "+ etternavn, film, telefon, epost, antall])
        vis_billetter()


        temp_film = document.getElementById("film_select")
        temp_film.value = "invalid"

        temp_ansatt =document.getElementById("input_antall")
        temp_ansatt.value = temp_ansatt.defaultValue

        temp_fornavn =document.getElementById("input_fornavn")
        temp_fornavn.value = temp_fornavn.defaultValue

        temp_etternavn =document.getElementById("input_etternavn")
        temp_etternavn.value = temp_etternavn.defaultValue

        temp_telefon =document.getElementById("input_telefonnr")
        temp_telefon.value = temp_telefon.defaultValue

        temp_epost =document.getElementById("input_epost")
        temp_epost.value = temp_epost.defaultValue





    }
}

<!--Sjekker om det er riktig input i inputfeltene-->
function valider(){

    let valid = true

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

    let billettregister = document.getElementById("billettregister")

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