sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",   // JSONModel을 사용하기 위한 모듈 주소 선언
    "sap/ui/model/resource/ResourceModel" // ResourceModel 사용하기 위한 모듈 주소 선언
],
function (Controller, JSONModel, ResourceModel) {  // 항상 위에 정의를 했으면 순서에 따라서 함수에도 추가를 해줘야한다
    "use strict";

    return Controller.extend("sync5.cl5.fioritest01.controller.Test01", {
        onInit: function () // 코드가 실행될 때 맨 처음에 한 번만 실행되는 함수 (주로 데이터 값을 줄 떄 사용)
        {
            // ***** 1번 문제 *****
            let Fiori1Set =     // 첫 번째 데이터
            {
                Input1: { value: "피오리 입력창", des: "입력창 설명입니다.", width: "50rem" },
            };
            let Fiori2Set =     // 두 번째 데이터
            {
                Input2: { value: "RTX1253C", des: "30Ton", width: "100px"},
            };
            let LabelSet =      // 세 번째 데이터
            {
                Input3: { text: "Without SCRIM"}
            };

            var oModel1 = new JSONModel(Fiori1Set);     // JSONModel 생성
            var oModel2 = new JSONModel(Fiori2Set);     // JSONModel 생성
            var oModel3 = new JSONModel(LabelSet);      // JSONModel 생성

            this.getView().setModel(oModel1, "Fi1");    // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌
            this.getView().setModel(oModel2, "Fi2");    // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌
            this.getView().setModel(oModel3, "Label");  // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌


            // ***** 2번 문제 *****
            var RModel = new ResourceModel({ bundleName: "sync5.cl5.fioritest02.fiori_text.fiori_text"})  // ResourceModel 생성, 번들 이름 지정
                                                                                                          // 번들 이름은 index.html에서 가져올 수 있다. 뒤에는 파일명
            this.getView().setModel(RModel) // View에 Model을 설정
        }
    });
});