sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritest06.controller.Test06", {
        onInit: function () 
        {
            var oData = 
            {
                GirdSet:
                [
                    {
                        Bukrs: "1000",
                        Gjahr: "2024",
                        Anln1: 48952
                    },

                    {
                        Bukrs: "2000",
                        Gjahr: "2024",
                        Anln1: 5031
                    },

                    {
                        Bukrs: "3000",
                        Gjahr: "2024",
                        Anln1: 47189
                    },

                    {
                        Bukrs: "4000",
                        Gjahr: "2024",
                        Anln1: 19147
                    },

                    {
                        Bukrs: "5000",
                        Gjahr: "2024",
                        Anln1: 1421
                    }
                ]
            }

            let oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        }
    });
});
