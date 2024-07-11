sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining08.controller.View08", {
        onInit: function () {

        },

        label_change: function()
        {
            var vText = "싱크5기 5반";
            var oLabel = this.getView().byId("label_1");

            oLabel.setText(vText);
            oLabel.setDesign("Bold");
        },

        display_msg: function()
        {
            var vInput = this.getView().byId("message").getValue();
            var vOutput = this.getView().byId("text");

            vOutput.setText(vInput);
            vOutput.setTextAlign("Center");
        },
        
        left: function()
        {
            var vOutput = this.getView().byId("text");
            vOutput.setTextAlign("Left");
        },

        center: function()
        {
            var vOutput = this.getView().byId("text");
            vOutput.setTextAlign("Center");
        },

        right: function()
        {
            var vOutput = this.getView().byId("text");
            vOutput.setTextAlign("Right");
        },

        bold: function()
        {
            var vOutput = this.getView().byId("label_2");
            vOutput.setDesign("Bold");
        },

        standard: function()
        {
            var vOutput = this.getView().byId("label_2");
            vOutput.setDesign("Standard");
        }
    });
});
