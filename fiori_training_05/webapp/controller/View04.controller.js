sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining05.controller.View04", {
        onInit: function () 
        {
            // let gs_name = 
            // {
            //     LabelSet: { text:"정세훈", design:"Bold", width:"30rem" },
            // },
            // gs_name2 = 
            // {
            //     TextSet: { text:"Soldesk 2F Class 5", width:"20rem", textAlign:"Center"},
            // },
            // gs_name3 = 
            // {
            //     ButtonSet: { text:"테스트", icon:"sap-icon://accept"}
            // },
            
            // oModel = new JSONModel(gs_name),
            // oModel2 = new JSONModel(gs_name2),
            // oModel3 = new JSONModel(gs_name3);

            // this.getView().setModel(oModel);
            // this.getView().setModel(oModel2, "Text");
            // this.getView().setModel(oModel3, "Button");

            var oData = new JSONModel("../cl5/cl5.json");
            this.getView().setModel(oData);
          
        },

        gugudan: function()
        {
            for (var i = 2; i <= 9; i++)
                for (var j = 1; j <= 9; j++)
                    console.log(i + " X " + j + " = " + (i * j))
                    // console.log(` ${i} X ${j} = ${i*j} `)
        },

        gugudan_n: function()
        {
            var vGugu = this.getView().byId("dan").getValue()
            for (var i = 1; i <= vGugu; i++)
                for (var j = 1; j <= 9; j++)
                    console.log(`${i} X ${j} = ${i * j}`)
        },

    });
});
