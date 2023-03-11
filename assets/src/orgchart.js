/* OrgChart.js 0.8
Author Lee Owens 
https://owens2024.github.io/bootstrap-orgchart/ 
*/

function show_modal(event){
    let title=document.getElementById("modalTitle");
    let bodyText=document.getElementById("modalText");
    let message = '';
    let textTitle='';
    title.innerText=event.textContent
    bodyText.innerText=orgMem[event.textContent]
    $('#exampleModal').modal('show');
    console.log(event.textContent)
}

var OrgTree = (function() {
    var publicAPI = {};
    this.bootstrapGridBase = 12;
    
    this.options = {
        baseClass: 'org-tree',
        baseLevel: this.bootstrapGridBase,
        minWidth: 2,
        collapsable: true,
        renderNode: function(node){
            return `<div class="node center-block-chart">
                        <div onclick="show_modal(this)" class="text_pointer">${node.label}</div>
                    </div>`;
        },
    };

    publicAPI.setOptions = function(options) {
        $.extend(this.options, options);
    }.bind(this);

    publicAPI.makeOrgTree = function($elem, data) {
        var base = $('<div class="' + this.options.baseClass + '">');
        var row = $('<div class="row">');
        var level = this.options.baseLevel;
        var width = this.bootstrapGridBase;

        data.forEach(function(node) {
            row.append(getNode(node, width, true, level, 100));
        });
        base.append(row);
        $elem.append(base);
        bindCollapse();
    }.bind(this);
    
    function bindCollapse(){
        if(this.options.collapsable) {
            $(document).on('click.orgchart.collapse', '.collapse_node', $.proxy(function(ev){
                $(ev.target).parents(".item:first").find(".row").toggle();
                $(ev.target).parents(".parent").toggleClass("collapsed");
                this.options.toggleCollapseIcon(ev.target);
            }, this));
        }
    }

    function getNode(node, level, noParent, baseCol, width) {
        var sublevel,
            self = $('<div class="item col-lg-chart-' + level + '"  data-width="' + width + '">');
        if(width > 30) {
            self.addClass('col-md-chart-'+level);
        }

        if (node.children) {

            var childRow = $('<div class="row">');
            baseCol = Math.floor(baseCol / node.children.length);
            if(baseCol == 0) baseCol = 1;
            self.addClass('child-width-'+baseCol);
            self.append(makeNode(node, true, !noParent));
            if (baseCol < this.options.minWidth) {
                sublevel = this.bootstrapGridBase;
            }
            else {
                sublevel = Math.floor(this.bootstrapGridBase / node.children.length);
                if (sublevel == 0) {
                    sublevel = 1;
                }
            }
            var childWidth = Math.floor(width / node.children.length);
            node.children.forEach(function(node) {
                childRow.append(getNode(node, sublevel, false, baseCol, childWidth));
            });
            self.append(childRow);
        }
        else {
            self.append(makeNode(node, false, !noParent));
        }
        return self;
    }

    function makeNode(node, isParent, isChild) {

        var container;
        var mainItem = $(this.options.renderNode(node));

        if (isParent) {
            container = $(`<div class="parent">`);
            mainItem = container.append(mainItem);

        }
        container = $('<div class="child">');
        if (!isChild) {
            container.addClass('root');
        }
        container.append(mainItem);
        mainItem = container.append(mainItem);
        return mainItem;
    }
    return publicAPI;
})();

let orgMem={
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

let datas=[
    {
        "label" : "Asamblea General",
        "children" : [
            {
                "label" : "Junta de Vigilancia"
                
            },
            {
                "label" : "Consejo de Administración",
                "children" : [{
                    "label" : "Gerente",
                    "children":[
                        {
                            "label" : "Contador",
                        },
                        {
                            "label" : "Secretario Tesorero",
                        }
                    ]
                    },
                    {
                        "label" : "Comité de Credito",
                    },
                    {
                        "label" : "Comité de Educación y Recreación",
                    },
                    {
                        "label" : "Comité de Solidaridad",
                    },
                    {
                        "label" : "Comité de Evaluación Cartera",
                    }
                ]
            },
            {
                "label" : "Revisor Fiscal",
                "children" : [{
                    "label" : "Secretario Tesorero"
                }
                ]
            }
        ]
    }
]