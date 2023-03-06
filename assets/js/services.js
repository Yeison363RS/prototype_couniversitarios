let services={
    "Aportes":["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","./assets/img/contribucion.png",''],
    "Créditos Ordinarios":["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","./assets/img/loan ordinary.png",""],
    "Créditos Extraordinarios":["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","./assets/img/bolsa.png",""],
    "Créditos Educativos":["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","./assets/img/loan.png",""],
    "Auxilios de Solidaridad":["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","","bi-bag-heart"],
    "Calculadora de créditos":["is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum","","bi-calculator-fill"]
}
function insertAllServices(){
    let container=document.getElementById("div-services");
    for (const service in services) {
        let div1 = document.createElement('DIV');
        div1.className= "col-lg-4 col-md-6"
        let div2 = document.createElement('DIV');
        div2.className="service-item  position-relative";
        let div3 = document.createElement('DIV');
        div3.className="icon"
        let ilink = document.createElement('I');
        ilink.className="bi";
        if(services[service][2]!=''){
            ilink.classList.add(services[service][2]);
        }else{
            let image = document.createElement('IMG');
            image.className="bi"
            image.src=services[service][1]
            ilink.appendChild(image);
        }
        let title = document.createElement('H3');
        title.innerHTML=service
        let content = document.createElement('P');
        content.innerHTML=services[service][0]
    
        let alink = document.createElement('A');
        alink.className="readmore stretched-link"
        alink.innerHTML="Saber mas ... "
        alink.href="#"
    
        let ifollowI = document.createElement('I');
        ifollowI.className="bi bi-arrow-right"
        
        container.appendChild(div1);
        div1.appendChild(div2)
        div2.appendChild(div3)
        div3.appendChild(ilink)
        
        div2.appendChild(title)
        div2.appendChild(content)
        div2.appendChild(alink)
        alink.appendChild(ifollowI)
    }

}
insertAllServices();