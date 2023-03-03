function addTable() {
    let tableBody = document.getElementById("id-tbody")
    let tableHead = document.getElementById("table-thead")

    
    let tbheads = new Array();
    tbheads[0] = "Nombre"
    tbheads[1] = "Cargo"

    let tr = document.createElement('TR');
    tableHead.appendChild(tr);
    for (i = 0; i < tbheads.length; i++) {
        let th = document.createElement('TH')
        th.appendChild(document.createTextNode(tbheads[i]));
        tr.appendChild(th);
    }

    let members = new Array()
    members[0] = new Array("Maria antonella lopez", "Gerente")
    members[1] = new Array("Julio cesar Gamboa", "Secretario")
    
    for (i = 0; i < members.length; i++) {
        let tr = document.createElement('TR');
        for (j = 0; j < members[i].length; j++) {
            let td = document.createElement('TD')
            td.appendChild(document.createTextNode(members[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }  
}
addTable();
    