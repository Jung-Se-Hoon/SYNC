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

            // let oData1 = {
            //     ButtonSet: { name: 'Confirm', width: '150px', icon: 'sap-icon://flight' },
            //  };
            //  let oData2 = {
            //     Button2Set: { name: 'Check', width: '200px', enabled: false },
            //  };
            //  let oData3 = {
            //     InputSet: { value: '입력필드', desc: 'Input field', maxL: 20, width: '300px', icon2: true },
            //  };
            //  let oData4 = {
            //     Input2Set: { desc: '컨트롤러에서 세팅', maxL: 10, width: '300px' },
            //  };
    
            //  let oModel1 = new JSONModel(oData1);
            //  let oModel2 = new JSONModel(oData2);
            //  let oModel3 = new JSONModel(oData3);
            //  let oModel4 = new JSONModel(oData4);
    
            //  this.getView().setModel(oModel1);
            //  this.getView().setModel(oModel2, 'IN1');
            //  this.getView().setModel(oModel3, 'IN2');
            //  this.getView().setModel(oModel4, 'IN3');
           
        },
        // showValue: function (pName1, pName2)
        //         {
        //             alert(this.getView().getModel().getProperty("/gs_data/" + pName1));
        //             alert(this.getView().getModel().getProperty("/gs_data/" + pName2));
        //         },

                
    });
});
