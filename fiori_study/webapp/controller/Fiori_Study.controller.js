sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
function (Controller, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("practice01.controller.Practice_01", {
        onInit: function () 
        
        {
            let oData = 
            {
                gs: {text:"SYNC5 Class 5", textAlign:"Center"}
            },  
            
            model = new JSONModel(oData),
            Rmodel = new ResourceModel({
               bundleName:"practice01.msg.msg"
            });

            this.getView().setModel(model);
            this.getView().setModel(Rmodel, "RSM");
        }

        
        
    });
});