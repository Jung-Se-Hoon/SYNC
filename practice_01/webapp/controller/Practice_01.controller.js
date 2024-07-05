sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("practice01.controller.Practice_01", {
        onInit: function () {

        },
        square: function()
        {
            var vWidth = this.getView().byId("width").getValue(),
                vHeight = this.getView().byId("height").getValue(),
                vArea = parseInt(vWidth) * parseInt(vHeight);

                this.getView().byId("area").setValue(vArea);
        }
    });
});
