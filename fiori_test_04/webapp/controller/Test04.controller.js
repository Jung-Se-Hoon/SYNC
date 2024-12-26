sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"   // JSONModel 사용하기 위한 모듈 주소 선언
],
function (Controller, JSONModel) {  // 항상 위에 정의를 했으면 순서에 따라서 함수에도 추가를 해줘야한다
    "use strict";


    return Controller.extend("sync5.cl5.fioritest04.controller.Test04", {
        onInit: function () 
        {
            var oData = // 데이터 생성
            {
                popul:
                [
                    { Year : 2018, home: 20499543 },
                    { Year : 2019, home: 20891348 },
                    { Year : 2020, home: 21484785 },
                    { Year : 2021, home: 22022753 },
                    { Year : 2022, home: 22383187 },
                ],
                born:
                [
                    { Year : 2018, Birth: 326822 },
                    { Year : 2019, Birth: 302676 },
                    { Year : 2020, Birth: 272337 },
                    { Year : 2021, Birth: 260562 },
                    { Year : 2022, Birth: 249186 },
                ],
            }

            let oModel = new JSONModel(oData);  // JSONModel 생성

            this.getView().setModel(oModel);    // View에 Model을 설정
        }
       
    });
});
