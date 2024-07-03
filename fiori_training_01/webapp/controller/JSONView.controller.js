sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
function (Controller, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining01.controller.JSONView", {
        onInit: function () 
        {   
            let oData ={ 
                            // InputSet: { name:"ABAP", 
                            //             desc:"입력창 입니다", 
                            //             width: "40em", 
                            //             update: true 
                            //          },

                            // TextSet:{ text:"SYNC 5반입니다.", width:"30rem"},

                            // ButtonSet: { btn_text:"확인버튼"}

                            Input1Set: { name:"입력창 1", desc:"설명 1 입니다.", width:"20rem"}

                        },

                oData2 = {
                            Input2Set: { name:"ST_01", desc:"Helmet", width:"200px"}
                         },

                oData3 = {
                            LabelSet: { name:"JSON Model Training 중", desgin:"Bold"}
                        },

                oModel = new JSONModel(oData),
                oModel2 = new JSONModel(oData2),
                oModel3 = new JSONModel(oData3),
                oRModel = new ResourceModel ({
                    bundleName: "sync5.cl5.fioritraining01.text.text" // sync5.cl5.fioritraining01 -> root
                });
    
                this.getView().setModel(oModel);    // 위에서 생성한 Data(Model)을 View의 메모리에 업로드
                this.getView().setModel(oModel2, "In1");
                this.getView().setModel(oModel3, "In2");
                this.getView().setModel(oRModel, "RSM");
        }
    });
});