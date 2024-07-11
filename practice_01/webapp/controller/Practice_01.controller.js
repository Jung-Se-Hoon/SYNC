sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    let gt_list = "";   // 전역변수 선언, 초기 값은 빈 문자

    return Controller.extend("practice01.controller.Practice_01", {
        onInit: function () // onInit 함수는 시작할 때 한 번 실행됨.
        {
            gt_list =   // gs_list에 배열을 할당.
            [
                {A: "ST_01", B: "Red", C: "100"},
                {A: "ST_02", B: "Blue", C: "200"},
                {A: "ST_03", B: "Green", C: "300"}
            ];
        },

        data_check: function()  // 버튼 누르면 실행되는 함수 
        {
            for (var i in gt_list)  // gs_list 순회.
            {
                console.log(gt_list[i]) // 각 요소를 콘솔에 순차적으로 출력
            }
        }

    });
});