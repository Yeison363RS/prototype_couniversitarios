google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);


function clickHandler(e) {
    alert('The user has clicked on ' + e.targetID);
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
        var selection = orgChart.getSelection();
        var message = '';
        for (var i = 0; i < selection.length; i++) {
          var item = selection[i];
          if (item.row != null && item.column != null) {
            var str = data.getFormattedValue(item.row, item.column);
            message += str + '\n';
          } else if (item.row != null) {
            var str = data.getFormattedValue(item.row, 0);
            message += str + '\n';
          } else if (item.column != null) {
            var str = data.getFormattedValue(0, item.column);
            message += str + '\n';
          }
        }
        if (message == '') {
          message = 'nothing';
        } else{
            // document.getElementById('teamModal').style.display='block'
            alert(message);
            var modal = document.getElementById("teamModal");
            ;
        }
       
      }
}

