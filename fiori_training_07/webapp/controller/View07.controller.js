sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    let gs_list = "";
    let gt_data = "",
        gs_air = "";

    return Controller.extend("sync5.cl5.fioirtraining07.controller.View07", {
        onInit: function () 
        {

            var aValue = ["AA", "BB", "CC", "DD"];

            gs_air = {
                Carrid: "KA",
                Connid: "0017",
                City: "Seoul",
            };

            gt_data = 
            [
                {
                    Carrid: "AA",
                    Carrname: "America Air",
                    Currcode: "USD",
                },

                {
                    Carrid: "KA",
                    Carrname: "Korean Air",
                    Currcode: "KRW",
                },

                {
                    Carrid: "DL",
                    Carrname: "Delta Air",
                    Currcode: "USD",
                },
                
                {
                    Carrid: "LH",
                    Carrname: "Luft Air",
                    Currcode: "EUR",
                }
            ],

            gs_list = 
            [   // 대괄호는 레코드 여러 개 만들 때 사용
                //대괄호->ABAP에서는 배열이 아니라 인터널 테이블이라고함
                //중괄호>ABAP에서는 스트럭쳐, 워크 에어리어 라고 함
                { 
                    Matnr: "ST_01", 
                    Maktx: "Steel", 
                    Werks: "1010", 
                    Lgort: "L1000" 
                },

                { 
                    Matnr: "RPX321", 
                    Maktx: "Road Still", 
                    Werks: "1020", 
                    Lgort: "L2000" 
                },

                { 
                    Matnr: "EL_GANG", 
                    Maktx: "Strong Steel", 
                    Werks: "1030", 
                    Lgort: "L3000" 
                }
            ];
        },

        itab_check: function()
        {
            // for (var i = 0; i < gt_data.length; i++)
            // {
            //     console.log(gt_data[i].Carrname); // gt_data-carrname
            // };

            // ls_data of gt_data 의 의미는 ls_data = gt_data[i]
            for (var ls_data of gt_data)
            {
                if (ls_data.Carrid != 'KA' && ls_data.Carrid != "DL")
                {
                    continue; // 지금 회차는 건너뛰고 바로 다음 회차로 보냄
                }
                 console.log(ls_data.Carrid)
                
            }
        },

        data_check: function()
        {   
            // 방법 1
            for (var i = 0; i < gs_list.length; i++)
            {
                console.log(gs_list[i]);
            }   
            // 방법 2
            for (var i in gs_list)
            {
                console.log(gs_list[i]);
            }
            // 방법 3
            for (var ls_data of gs_list) // ls_data = gt_data[i] 와 같은 의미
                                        // for of문을 사용해서 gt_data를 한개씩 뽑아서 ls_data에 전달해줌
            {
                console.log(ls_data);
            }
        },

        while_check: function()
        {
            const aValue = ['AA', 'BB', 'CC', 'DD'];

            var i = 4;
            while (true) // 괄호 안의 조건을 만족 하는 동안 계속 수행
            {
                console.log(aValue[i])
                i++;
                if ( i >= aValue.length)
                    break;
                // if (i < aValue.length)
                //     continue;
                // else
                //     break;
            }
        },

        while_test: function()
        {
            let aValue = ['AA', 'BB', 'CC', 'DD'];

            var i = 0;

            do  // 무조건 한 번은 실행한다.
            {
                console.log(aValue[i])
                i++;
            }
            while (i < aValue.length)
        },

        cont_check: function()
        {
            var i = 0;

            while (i < 20)
            {
                i++;    
                
                if (i == 2 || i == 5 || i == 12 || i == 17)
                {
                    continue;
                }
                else
                {
                    console.log(i);
                }
            }
        },

        cont_check_2: function()
        {
            var i = 0;

            while (i < 20)
            {
                i++;

                if (i % 2 == 0)
                {
                    continue;
                }
                
                console.log(i);
            }
        },

        while_gugudan: function()
        {
            var i = 1;
            var j = 0;

            while (i < 9)
            {
                i++;
                while (j < 9)
                {
                    j++;
                    console.log(`${i} X ${j} = ${i * j}`);
                }
                j = 0;
            }
        },

        gugudan_n: function()
        {
            var vNum = this.getView().byId("gugu").getValue();

            var i = 0, j = 0;
            while (i < vNum)
            {
                i++;
                while (j < 9)
                {
                    j++;
                    console.log(`${i} X ${j} = ${i * j}`)
                }
                j = 0;
            }
        },

        calc_grade: function()
        {
            var vScore = this.getView().byId("score").getValue();

            if (vScore < 0 || vScore > 100)
            {
                MessageToast.show("올바은 점수를 입력하세요.")
                exit; // 전체 코드를 끝내버린다. 밑에가 실행이 안됨
            }
            else if (vScore >= 90)
            {
                MessageToast.show(`${vScore}점의 학점은 A 입니다.`)
            }
            else if (vScore >= 80)
            {
                MessageToast.show(`${vScore}점의 학점은 B 입니다.`)

            }
            else if (vScore >= 70)
            {
                MessageToast.show(`${vScore}점의 학점은 C 입니다.`)
    
            }
            else if (vScore >= 60)
            {
                MessageToast.show(`${vScore}점의 학점은 D 입니다.`)
            }
            else
            {
                MessageToast.show(`${vScore}점의 학점은 F 입니다.`)
            }
        }
    });
});