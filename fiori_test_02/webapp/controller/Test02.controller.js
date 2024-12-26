sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",   // JSONModel을 사용하기 위한 모듈 주소 선언
    "sap/ui/model/resource/ResourceModel", // ResourceModel 사용하기 위한 모듈 주소 선언
    "sap/m/MessageToast"    // MessageToast를 사용하기 위한 모듈 주소 선언
],
function (Controller, JSONModel, ResourceModel, MessageToast) {    // 항상 위에 정의를 했으면 순서에 따라서 함수에도 추가를 해줘야한다
    "use strict";

    return Controller.extend("sync5.cl5.fioritest02.controller.Test02", {
        onInit: function () // 코드가 실행될 때 맨 처음에 한 번만 실행되는 함수 (주로 데이터 값을 줄 떄 사용)
        {
            // ******* 3 ~ 6 번 문제 *********
            let oData1 = { text: "SYNC5 First Test of 정세훈", textAlign: "Center"};    // 첫 번째 데이터
            let oData2 = { text: "정세훈 Fiori 시험중"};                                // 두 번째 데이터
            let oData3 = { text: "정세훈 Fiori 시험중"};                                // 세 번째 데이터

            var oModel1 = new JSONModel(oData1);    // JSONModel 생성
            var oModel2 = new JSONModel(oData2);    // JSONModel 생성
            var oModel3 = new JSONModel(oData3);    // JSONModel 생성
            var oRmodel = new ResourceModel({bundleName: "sync5.cl5.fioritest02.msg.msg"})  // ResourceModel 생성, 번들 이름 지정
                                                                                            // 번들 이름은 index.html에서 가져올 수 있다. 뒤에는 파일명

            this.getView().setModel(oModel1, "In1");    // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌
            this.getView().setModel(oModel2, "In2");    // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌
            this.getView().setModel(oModel3, "In3");    // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌
            this.getView().setModel(oRmodel, "RSM");    // View에 Model을 설정해주고 각 Model에 이름을 붙혀줌

            var oData5 = new JSONModel("../data/jsh18.json"); // json파일을 갖고오는 상대경로, JSONModel을 생성

            this.getView().setModel(oData5);    // View에 Model을 설정

            // ******* 3 ~ 6 번 문제 *********
        },
        
            // ******* 7번 문제 *********

        Calc_Triangle: function()   // 삼각형 면적 구하는 함수
        {
            var vWidth = this.getView().byId("width").getValue();   // 사용자로부터 밑변의 길이를 입력받기 위해 사용
            var vHeight = this.getView().byId("height").getValue(); // 사용자로부터 높이의 길이를 입력받기 위해 사용
            var vArea = parseInt(vWidth) * parseInt(vHeight) / 2;   // 삼각형 넓이 구하는 공식, 정수형으로 계산

            this.getView().byId("area").setValue(vArea);    // 삼각형 넓이를 면적 Input에 출력하기 위해 사용
        },

            // ******* 8번 문제 *********

        Calc_Price: function()  // 할인율 구하는 함수
        {
            var vOrigin = this.getView().byId("Origin_Price").getValue();   // 사용자로부터 원 가격 입력받기 위해 사용
            var vSale = this.getView().byId("Sale_Price").getValue();   // 사용자로부터 밑변의 할인된 가격을 입력받기 위해 사용
            var vPercent = 100 - parseFloat(vSale) / parseFloat(vOrigin)  * 100;    // 할인율 구하는 공식, 할인율이므로 실수형으로 계산

            this.getView().byId("Percent").setValue(vPercent);  // 할인율을 Input에 출력하기 위해 사용
        },

            // ******* 9번 문제 *********

        Check_Country: function()   // 나라 체크 함수
        {
            var vCountry = this.getView().byId("City").getValue();  // 사용자로부터 나라를 입력받기 위해 사용

            switch (vCountry)   // switch문을 사용한다 조건에는 사용자로부터 입력 받는 변수를 넣는다.
            {
                case 'Korea':   // Korea를 입력 받으면
                    MessageToast.show('한국') // 한국 출력
                    break;  // 여기서 멈추기 위해 break 사용
                case 'America': // America 입력 받으면
                    MessageToast.show('미국')   // 미국 출력
                    break;  // 멈추기 위해 break 사용
                case 'Israel':                          // 밑에도 동일
                    MessageToast.show('이스라엘')
                    break;
                case 'Thailand':                         // 밑에도 동일
                    MessageToast.show('태국')
                    break;
                case 'Russia':                            // 밑에도 동일
                    MessageToast.show('러시아')
                    break;
                case 'Poland':                           // 밑에도 동일
                    MessageToast.show('폴란드')
                    break;
                case 'Germany':                          // 밑에도 동일
                    MessageToast.show('독일')
                    break;
                case 'England':                         // 동일
                    MessageToast.show('잉글랜드')
                    break;
                default:    // 입력 받은 값이 위에 값이 없을 때
                    MessageToast.show("No Match")   // No Match 출력

            }
        },

            // ******* 10번 문제 *********

        gugu_for: function()    // 구구단 for문으로 출력
        {

            for ( var i = 2; i <= 9; i++)   // i가 2부터 9이하까지 1씩 증가
            {
                for (var j = 1; j <= 9; j++)    // j가 1부터 9이하까지 1씩 증가
                {
                    console.log(`${i} X ${j} = ${i * j}`)   // 구구단 출력 `과 $을 사용해서 출력하였다
                }
                j = 1;  // j가 9를 초과되어 탈출하면 다시 1으로 초기화 시켜준다.
            }
        },

            // ******* 10번 문제 *********

        gugu_while: function()  // 구구단 while문으로 출력
        {
            var i = 1;
            var j = 0;  // 초기 값 i와 j를 선언

            while ( i < 9 ) // i가 9보다 작을 경우에 계속 실행
            {
                i++;    // i가 1씩 증가
                while ( j < 9)  // j가 9보다 작을 경웨 계속 실행
                {
                    j++;    //j가 1씩 증가
                    console.log(`${i} X ${j} = ${i * j}`)   // 구구단 출력 `과 $을 사용해서 출력하였다.
                }
                j = 0;  // j가 9를 초과되어 탈출하면 다시 0으로 초기화
            }
        },

            // ******* 10번 문제 *********

        gugu_for_while: function()  // 구구단을 for와 while문으로 출력
        {
            for (var i = 2; i <= 9; i++)    // i가 2부터 9이하까지 1씩 증가
            {
                var j = 0;  // j는 0으로 선언

                while( j < 9 )  // j가 9보다 작으면 계속 실행
                {
                    j++;    // j는 1씩 증가
                    console.log(`${i} X ${j} = ${i * j}`)   // 구구단 출력 `과 $을 사용해서 출력하였다.
                }
                j = 0;  // j가 9를 초과되어 탈출하면 다시 0으로 초기화
            }
        },

            // ******* 11번 문제 *********

        gugu_skip: function()   // 입력된 단 제외하고 2-9단 출력
        {
            var vDan = this.getView().byId("dan").getValue();   // 사용자로부터 제외할 단을 입력 받는다
            var i = 1;
            var j = 0;  // i와 j를 선언

            while ( i < 9 ) // i가 9보다 작으면 계속 반복
            {
                i++;    // i가 1씩 증가
                if ( i == vDan )    // i가 입력받은 값과 같으면
                {
                    continue;   // 반복문의 처음으로 돌아간다. (입력 받은 값을 제외하기 위해)
                }
                while ( j < 9 ) // j가 9보다 작으면 계속 반복
                {
                    j++;    // j가 1씩 증가
                    console.log(`${i} X ${j} = ${i * j}`)   // 구구단 출력 `과 $을 사용해서 출력하였다.
                }
                j = 0;  // j가 9를 초과되어 탈출하면 다시 0으로 초기화
            }
        },

            // ******* 12번 문제 *********

        gugu_2: function()  // 짝수 단만 출력하는 구구단
        {
            for ( var i = 2; i <= 9; i+=2)  // i가 2부터 9이하까지 2씩 증가를 한다. i+=2 --> i = i + 2 (2씩 증가하는 뜻)
                {
                    for (var j = 1; j <= 9; j++)    // j가 1부터 9이하까지 1씩 증가를 한다
                    {
                        console.log(`${i} X ${j} = ${i * j}`)  // 구구단 출력 `과 $을 사용해서 출력하였다.
                    }
                    j = 0;  // j가 9를 초과되어 탈출하면 다시 0으로 초기화
                }
        }
    });
});
