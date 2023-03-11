let events=[
    ["Capacitacion tecnicas de pedagogia","./assets/img/actividad1.jpg","Se llevara a cabo con participación de diferentes invitados expositores","#"],
    ["Encuentro futbolistico","./assets/img/actividad2.jpg","Torneo de microfutbol para incentivar la recreación de todos los asociados","#"],
]

let news=[
    ["Cambio de politicas credito educacional","./assets/img/new1.jpg","Se presentan cambios en las formas de pago permitidas...","#"],
    ["Actualización de datos","./assets/img/new2.jpg","Con el fin de conocer el estado actual de nuestros asociados...","#"],
]


function createTextNode(text){
    return document.createTextNode(text);
}
function createElementStyles(typeE,classStyles){
     let element = document.createElement(typeE);
     element.className=classStyles;
     return element
}

function loadnews(){
    let $news_con = $('#news-grid');
    for (let i = 0; i < news.length; i++) {
        let divcol=createElementStyles('DIV',"card col-lg-6 col-md-6");
        let divimage=createElementStyles('DIV',"ajust-item-news");
        let img_eve=createElementStyles('IMG',"image_cover");
        img_eve.src=news[i][1]
        let divbody=createElementStyles('DIV',"card-body");
        let title=createElementStyles('H5',"");
        title.innerHTML=news[i][0];
        let desc=document.createElement('P');
        desc.innerHTML=news[i][2];
        let link=createElementStyles('A',"btn btn-details");
        link.href=news[i][3]
        link.appendChild(createTextNode("Ver detalles"))
        divbody.appendChild(title)
        divbody.appendChild(desc)
        divbody.appendChild(link)
        divimage.appendChild(img_eve)
        divcol.appendChild(divimage)
        divcol.appendChild(divbody)
        $news_con.append(divcol)
    }
}

function loadEvents(){
    let eventsContainer = $('#events-grid');
    for (let i = 0; i < events.length; i++) {
        let divcol=createElementStyles('DIV',"card col-lg-4 col-md-6");
        let divimage=createElementStyles('DIV',"ajust-item");
        let img_eve=createElementStyles('IMG',"image_cover");
        img_eve.src=events[i][1]
        let divbody=createElementStyles('DIV',"card-body");
        let title=createElementStyles('H5',"card-title");
        title.innerHTML=events[i][0];
        let desc=createElementStyles('P','card-text');
        desc.innerHTML=events[i][2];
        let link=createElementStyles('A',"btn btn-details");
        link.href=events[i][3]
        link.appendChild(createTextNode("Ver detalles"))
        
        divimage.appendChild(img_eve)
        divbody.appendChild(title)
        divbody.appendChild(desc)
        divbody.appendChild(link)
        divcol.appendChild(divimage)
        divcol.appendChild(divbody)
        eventsContainer.append(divcol)
    }
}
loadEvents();
loadnews();