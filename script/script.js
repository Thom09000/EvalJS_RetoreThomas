const { createElement } = require("react");

const { Profiler } = require("react");

const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
        avatar : './img/john.png',
        icon : './img/john_icon.png',
        latitude : 43.604429,
        longitude : 1.443812
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
        avatar : './img/jane.png',
        icon : './img/jane_icon.png',
        latitude : 43.60792, 
        longitude : 1.44133
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
        avatar : './img/venerable.png',
        icon : './img/venerable_icon.png',
        latitude : 43.60053,
        longitude : 1.44590
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
        avatar : './img/chien.png',
        icon : './img/chien_icon.png',
        latitude : 43.60377,
        longitude : 1.43583
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
        avatar : './img/renard.jpg',
        icon : './img/renard_icon.png',
        latitude : 43.59602,
        longitude : 1.43692
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
        avatar : './img/wrex.png',
        icon : './img/wrex_icon.png',
        latitude : 43.59555,
        longitude : 1.45257
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
        avatar : './img/garrus.png',
        icon : './img/garrus_icon.png',
        latitude : 43.61108,
        longitude : 1.45539
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
        avatar : './img/liara.png',
        icon : './img/liara_icon.png',
        latitude : 43.61183,
        longitude :  1.43222
    }
];

// Debut exo 2---------------------------------------------------------

const tabData=[];

tabData.push(usersHuman, usersPet, usersXeno);



function cardHuman() {
    const article=document.createElement("article");
    const nom=document.createElement("h2");
    nom.innerText=usersHuman.name;
    const image=document.createElement("img");
    image.setAttribute.src=usersHuman.avatar;
    image.setAttribute.alt="Portrait de"+usersHuman.name;
    const paragraphe=document.creatElement("p");
    paragraphe.innerText=usersHuman.age+" "+ " "+usersHuman.email
    article.classList.add("card");
    article.innerHTML=nom+image+paragraphe;

    return article;
};

console.log(cardHuman);

function cardPet() {
    const article=document.createElement("article");
    const nom=document.createElement("h2");
    nom.innerText=usersPet.name;
    const image=document.createElement("img");
    image.setAttribute.src=usersPet.avatar;
    image.setAttribute.alt="Portrait de"+usersPet.name;
    const paragraphe=document.creatElement("p");
    paragraphe.innerText=usersPet.age+" "+ " "+usersPet.email
    article.classList.add("card");
    article.innerHTML=nom+image+paragraphe;

    return article;
};

function cardXeno() {
    const article=document.createElement("article");
    const nom=document.createElement("h2");
    nom.innerText=usersXeno.name;
    const image=document.createElement("img");
    image.setAttribute.src=usersXeno.avatar;
    image.setAttribute.alt="Portrait de"+usersXeno.name;
    const paragraphe=document.creatElement("p");
    paragraphe.innerText=usersXeno.age+" "+ " "+usersXeno.email
    article.classList.add("card");
    article.innerHTML=nom+image+paragraphe;

    return article;
};



function profil(player) {
    let cardListe=[];

    if (player==tabData[0]) {
        cardListe.push(cardHuman);
    }
        
    else if (player==tabData[1]) {
        cardListe.push(cardPet);
    }
   
    else if (player==tabData[2]) {
        cardListe.push(cardXeno);
    }

    else {
        console.log("Type de Profil non Existant");
    }
    return cardListe;
}

console.log(cardHuman);

console.log(profil(usersHuman));

console.log(tabData)

//depotCarte.innerHTML= profil(usersHuman);

function profilAll(grosTab) {
    const profils=document.getElementsByClassName(".profils"); 

};


var map = L.map('map').setView([43.604429, 1.443812], 14);
