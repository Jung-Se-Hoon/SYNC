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
                ],

                
                segments: 
                [
                    { label: "Implementation Phase", value: 40.0, displayedValue: "40.0%" },
                    { label: "Design Phase", value: 21.5, displayedValue: "21.5%" },
                    { label: "Test Phase", value: 38.5, displayedValue: "38.5%" }
                ],

                points: 
                [
                    { value: 33.1, label: "May", "secondaryLabel": "Q2" },
                    { value: 12, label: "June" },
                    { value: 51.4, label: "July", "secondaryLabel": "Q3" },
                    { value: 52, label: "Aug" },
                    { value: 69.9, label: "Sep" },
                    { value: 0.9, label: "Oct", "secondaryLabel": "Q4" }
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
