sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"  // JSONModel 사용하기 위한 모듈 주소 선언
],
function (Controller, JSONModel) {   // 항상 위에 정의를 했으면 순서에 따라서 함수에도 추가를 해줘야한다
    "use strict";

    var aArray = "";    // 전역 변수 aArray를 선언

    return Controller.extend("sync5.cl5.fioritest03.controller.Test03", {
        onInit: function ()     // 코드가 실행될 때 맨 처음에 한 번만 실행되는 함수 (주로 데이터 값을 줄 떄 사용)
        {
            aArray = // 데이터 생성
            [
                { Team: "기아 타이거즈", Area: "광주" },
                { Team: "삼성 라이온즈", Area: "대구" },
                { Team: "NC 다이노스",   Area: "창원" },
                { Team: "두산 베어스",   Area: "서울" },
                { Team: "LG 트윈스",     Area: "서울" },
            ];

            let oData = new JSONModel("../ball/Base.json"); // json파일을 갖고오는 상대경로, JSONModel을 생성
            this.getView().setModel(oData); // View에 Model을 설정
        },

        Baseball: function()    // 야구 함수
        {
            for ( var i in aArray)  // i가 배열의 마지막 까지
            {
                console.log(aArray[i])  // aArray의 배열을 순차적으로 출력
            }
        }

    });
});
