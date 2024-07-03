sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
function (Controller, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("fioriexercise01.fioriexercise01.controller.fiori_exercise_01", {
        onInit: function () 
        {
            let oData = { 
                            InputData1: { text:"SYNC5 Class 5 정세훈 25번", textAlign:"Center" }
                        },
                oData2 = {
                             InputData2: { text:"정세훈 Fiori 교육중" }
                        },

            oModel = new JSONModel(oData),
            oModel2 = new JSONModel(oData2),
            oRModel = new ResourceModel ({
                bundleName: "fioriexercise01.fioriexercise01.msg.msg"
            });

            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "In1");
            this.getView().setModel(oRModel, "RSM");
        },

    });
});
