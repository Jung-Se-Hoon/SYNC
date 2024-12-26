sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"   // JSONModel 사용하기 위한 모듈 주소 선언
],
function (Controller, JSONModel) {  // 항상 위에 정의를 했으면 순서에 따라서 함수에도 추가를 해줘야한다
    "use strict";

    return Controller.extend("sync5.cl5.fioritest05.controller.Test05", {
        onInit: function () 
        {
            var oData = // 데이터 생성
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

            let oModel = new JSONModel(oData);  // JSONModel 생성

            this.getView().setModel(oModel);    // View에 Model을 설정
        }
    });
});
