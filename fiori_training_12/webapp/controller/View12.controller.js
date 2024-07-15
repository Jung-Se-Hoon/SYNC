sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    // Controller 클래스를 확장하여 View12 컨트롤러를 정의합니다
    return Controller.extend("sync5.cl5.fioritraining12.controller.View12", {
        
        // View 초기화 메서드입니다
        onInit: function () {
            // 예시 데이터를 정의합니다
            let oData = {
                MatnrSet: [
                    { Matnr: "RPC_0001", Stock: 250, Price: 1000 },  // 자재 코드와 재고 및 가격 정보
                    { Matnr: "RPC_0002", Stock: 325, Price: 1200 },
                    { Matnr: "RPC_0003", Stock: 512, Price: 1450 },
                    { Matnr: "RPC_0004", Stock: 430, Price: 1600 },
                    { Matnr: "RPC_0005", Stock: 120, Price: 1125 }
                ]
            };

            // JSONModel을 생성하고 데이터를 모델에 바인딩합니다
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // 외부 JSON 파일에서 데이터를 로드하는 예제
            // let oData = new JSONModel("/mat/mat_info.json");
            // this.getView().setModel(oData);
        },

        // 각 차트를 보이도록 설정하는 메서드들입니다
        show1: function() {
            this.getView().byId("idVizFrame").setVisible(true);
        },
        show2: function() {
            this.getView().byId("idVizFrame2").setVisible(true);
        },
        show3: function() {
            this.getView().byId("idVizFrame3").setVisible(true);
        },
        show4: function() {
            this.getView().byId("idVizFrame4").setVisible(true);
        },
        show5: function() {
            // 모든 차트를 보이도록 설정하는 메서드입니다
            this.getView().byId("idVizFrame").setVisible(true);
            this.getView().byId("idVizFrame2").setVisible(true);
            this.getView().byId("idVizFrame3").setVisible(true);
            this.getView().byId("idVizFrame4").setVisible(true);
        },

        // 각 차트를 숨기도록 설정하는 메서드들입니다
        noshow1: function() {
            this.getView().byId("idVizFrame").setVisible(false);
        },
        noshow2: function() {
            this.getView().byId("idVizFrame2").setVisible(false);
        },
        noshow3: function() {
            this.getView().byId("idVizFrame3").setVisible(false);
        },
        noshow4: function() {
            this.getView().byId("idVizFrame4").setVisible(false);
        },
        noshow5: function() {
            // 모든 차트를 숨기도록 설정하는 메서드입니다
            this.getView().byId("idVizFrame").setVisible(false);
            this.getView().byId("idVizFrame2").setVisible(false);
            this.getView().byId("idVizFrame3").setVisible(false);
            this.getView().byId("idVizFrame4").setVisible(false);
        }
    });
});
