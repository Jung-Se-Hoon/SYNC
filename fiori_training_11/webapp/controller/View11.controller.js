sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining11.controller.View11", {
        onInit: function () 
        {
            let oData =
            {
                MaterialSet:
                [
                    { Matnr: "STNL_ST304",      Price: 125400 },
                    { Matnr: "STNL_ALLOY",      Price: 185015 },
                    { Matnr: "STNL_HASTELLOY",  Price: 253600 },
                    { Matnr: "STNL_HAYNES",     Price: 345107 }
                ],

                AirlineSet:
                [
                    { Carrid: "American", Seats: 800},
                    { Carrid: "Korean", Seats: 500},
                    { Carrid: "Luft Hansa", Seats: 600},
                    { Carrid: "Delta", Seats: 107},
                    { Carrid: "Qatar", Seats: 250},
                    { Carrid: "Canada", Seats: 325},
                ]
            };

            let oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        },

        press: function (oEvent) {
			MessageToast.show("The interactive line chart is pressed.");
		}
    });
});
