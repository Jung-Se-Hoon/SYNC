sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("fioriexercise02.fioriexercise02.controller.fiori_exercise_02", {
        onInit: function () 
        {
            
            let oModel = new JSONModel("../data/property.json");

            this.getView().setModel(oModel);
           
        },
        showValue: function (pName1, pName2)
                {
                    alert(this.getView().getModel().getProperty("/gs_data/" + pName1));
                    alert(this.getView().getModel().getProperty("/gs_data/" + pName2));
                },

                
    });
});
