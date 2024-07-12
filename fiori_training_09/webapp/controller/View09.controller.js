sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining09.controller.View09", {
        onInit: function () 
        {
            let oData =
            {
                gt_data:
                [
                    {Carrid: "AA", Carrname: "America Air", price: 2000 ,Currcode: "USD"},
                    {Carrid: "KA", Carrname: "Korean Air", price: 1000,  Currcode: "KRW"},
                    {Carrid: "LH", Carrname: "LuftHansa Air",price: 5000, Currcode: "EUR"}

                ]
            };

            let oModel = new JSONModel(oData);

            this.getView().setModel(oModel);
        },

        formatAvailableToObjectState: function(bAvailable) 
        {
			return 5 < 4 ? "Success" : "Error";    //삼중 연산자
		}
    });
});
