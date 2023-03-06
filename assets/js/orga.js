google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

let orgMembers={
  "Asamblea General":"La Asamblea General es .....",
  'Junta de Vigilancia':"La junta de vigilancia es ....",
  'Consejo de Administración':"El consejo de administración es ...",
  'Revisor Fiscal':"El revisor fiscal es....",
  'Gerente':"El gerente es la persona encargada de...",
  'Comité de Crédito':"el comite de credito es el encargado de ...",
  'Comité de Educación y Recreación':"El comite de educcacion y recreacion es el encargado de",
  'Comité de Solidaridad':"El comite de solidaridad es el encargado de ...",
  'Comité de Evaluación Cartera':"El Comité de Evaluación Cartera es el encargado de ...",
  'Contador':"El contador de la cooperativa es el encargado de ...",
  'Secretario Tesorero':"El secretario tesorero es el encargado de ....."
}

function drawChart() {
  
  
    var data = new google.visualization.DataTable();
    
    
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');

    // For each orgchart box, provide the name, manager, and tooltip to show.
    data.addRows([
        ['Asamblea General','','',],
        ['Junta de Vigilancia', 'Asamblea General',''],
        ['Consejo de Administración', 'Asamblea General',''],
        ['Revisor Fiscal', 'Asamblea General',''],
        
        ['Gerente', 'Consejo de Administración',''],
        
        ['Comité de Crédito', 'Consejo de Administración',''],
        ['Comité de Educación y Recreación', 'Consejo de Administración',''],
        ['Comité de Solidaridad','Consejo de Administración',''],
        ['Comité de Evaluación Cartera','Consejo de Administración',''],


        ['Contador', 'Gerente',''],
        ['Secretario Tesorero', 'Gerente',''],
        
        
    ]);

    // Create the chart.
    var orgChart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    // Draw the chart, setting the allowHtml option to true for the tooltips.
    options={'allowHtml':true,
              'compactRows':true,
              'nodeClass':"nodes-char",
              'selectedNodeClass':"nodes-selected",
              'size':"large",
              'width':'100%'
            }
    google.visualization.events.addListener(orgChart, 'select', selectHandler);
    orgChart.draw(data, options);

    function selectHandler() {
        let title=document.getElementById("modalTitle");
        let bodyText=document.getElementById("modalText");

        let selection = orgChart.getSelection();
        let message = '';
        let textTitle='';
        $('#exampleModal').modal('show');

        for (var i = 0; i < selection.length; i++) {
          var item = selection[i];
          if (item.row != null && item.column != null) {
            textTitle=data.getFormattedValue(item.row, item.column)
            message += data.getFormattedValue(item.row, item.column) + '\n';
          } else if (item.row != null) {
            textTitle=data.getFormattedValue(item.row, 0)
            message += orgMembers[data.getFormattedValue(item.row, 0)] + '\n';
          } else if (item.column != null) {
            textTitle=data.getFormattedValue(0, item.column)
            message += orgMembers[data.getFormattedValue(0, item.column)]+ '\n';
          }
        }
        if (message != '') {
          console.log(message)  
          title.innerText=textTitle
          bodyText.innerText=message
        }
      }
}

