sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";


    return Controller.extend("practice01.controller.Practice_01", {
        onInit: function ()
        {
           
        },

        display_msg: function()
        {
            var vMsg = this.getView().byId("msg").getValue();
            var vText = this.getView().byId("copy");

            vText.setText(vMsg)
        }

        

    });
});