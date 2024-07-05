sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining04.controller.TrnView04", {
        onInit: function () 
        {

        },

        onPress: function ()
        {
            let oData =
            {
                Carrid: "AA",
                Carrname: "American Airline",
                Currcode: "USD"
            };
            // Property는 독립적이지 못해서 반드시 소속을 같이 표기해야 함
            // Fiori에서 소속의 표시는 '.' 이다.(ABAP은 '-')
            MessageToast.show(oData.Carrname);
        },

        onItabPress: function()
        {
            // gt_data는 ABAP에서 Internal Table 이라고 한다.
            // 그 안에 있는 {} 하나 하나를 Structure or WorkArea(WA) 라고 한다
            let lt_data = 
            
            [
                    {
                        Carrid: "AA",
                        Carrname: "American Airline",
                        Currcode: "USD"
                    },

                    {
                        Carrid: "KA",
                        Carrname: "Korean Airline",
                        Currcode: "KRW"
                    },

                    {
                        Carrid: "LH",
                        Carrname: "Luft Hansa",
                        Currcode: "EUR"
                    }
            ]
        },
        
        test: function ()
        {
           
            // of는 0번째 1전째 2번째 in은 a b c를 출력
            //  시작 값; 종료조건; 증감조건, interable가 가지고 있는 순번(index)을 순차적으로 i 에게 준다
            // for (var i in iterable)
            // {
            //     console.log(iterable[i]);
            // }

            // console.log('----------------------')
            // // iterable이 가지고 있는 값을 순차적으로 i에게 준다
            // // ABAP의 LOOP 구문과 동일 : LOOP AT iterable
            // for (var i of iterable)
            // {
            //     console.log(i);
            // }
            var iterable = ['A', 'B', 'C'];

            // a > b ABAP에서의 표현 -> a > b or a GT b
            // a => b ABAP에서의 표현 => a > b or a GE b
            // a < b ABAP에서의 표현 => a < b or a LT b
            // a =< b ABAP에서의 표현 => a =< b or a LE b
            // a != b ABAP에서의 표현 => a <> b or a NE b

            for (var i in iterable)
                {
                    if ( i == '0') //ABAP에서는 = 또는 EQ
                    {
                        console.log('Zero')
                    }
                    else if ( i == '1')
                    {
                        console.log('One')
                    }
                    else if ( i == '2')
                    {
                        console.log('Two')
                    }
                }
        },

        if_check: function()
        {
            var vClass = 'CL5';
            var vEdu1 = "SYNC1";
            var vEdu2 = "SYNC2";
            var vEdu3 = "SYNC3";
            var vEdu4 = "SYNC4";
            var vEdu5 = "SYNC5";

            switch ("SYNC5")
            {
                case vEdu1:
                    console.log("싱크1")
                    break;
                case vEdu2:
                    console.log("싱크2")
                    break;
                case vEdu3:
                    console.log("싱크3")
                    break;
                case vEdu4:
                    console.log("싱크4")
                    break;
                case vEdu5:
                    console.log("싱크5")
                    break;
            }

            //     vEdu = "SYNC5";

            // if(vEdu == "SYNC5")
            // {
            //     console.log("오케이")
            // }
            // else
            // {
            //     console.log("NO");
            // }


            // switch (vClass) // switch 는 <, > 같은 연산자 사용을 안함
            // {
            //     case 'CL1':
            //         console.log('1반')
            //         break;
            //     case 'CL2':
            //         console.log('2반')
            //         break;
            //     case 'CL3':
            //         console.log('3반')
            //         break;
            //     case 'CL4':
            //         console.log('4반')
            //         break;
            //     case 'CL5':
            //         console.log('5반')
            //         break;
            //     case 'CL6':
            //         console.log('6반')
            //         break;
            //     default:
            //         console.log("암것도 없어")
            // }

            // if ( vClass == 'CL1')
            // {
            //     console.log('1반')
            // }

            // else if ( vClass == 'CL2')
            // {
            //     console.log('2반')
            // }

            // else if ( vClass == 'CL3')
            // {
            //     console.log('3반')
            // }

            // else if ( vClass == 'CL4')
            // {
            //     console.log('4반')
            // }
            
            // else if ( vClass == 'CL5')
            // {
            //     console.log('5반')
            // }

            // else
            // {
            //     console.log(vClass);
            // }

        },

        if_check_2: function ()
        {
            var vMonth = 'July';

            if (vMonth == 'July')
            {
                console.log("7월이다")
            }
            else if (vMonth != 'July')
            {
                console.log("7월이 아니야")
            }
        },

        switch_check: function ()
        {
            var vCity = this.getView().byId("city_name").getValue();

            // switch (vCity) 
            // {
            //     case 'Seoul':
            //         alert('서울')
            //         break;
            //     case 'Gwangju':
            //         alert('광주')
            //         break;
            //     case 'Daegu':
            //         alert('대구')
            //         break;
            //     case 'Busan':
            //         alert('부산')
            //         break;
            //     case 'Daejeon':
            //         alert('대전')
            //         break;
            //     default:
            //         alert('도시없음')
            // }

            if (vCity == 'Seoul')
            {
                alert('서울')
            }
            else if (vCity == 'Gwangju')
            {
                alert('광주')
            }
            else if (vCity == 'Daegu')
            {
                alert('대구')
            }
            else if (vCity == 'Busan')
            {
                alert('부산')
            }
            else if (vCity == 'Daejeon')
            {
                alert('대전')
            }
            else
                alert('도시없음')
        },

        compare_number: function()
        {
            var vNumber1 = this.getView().byId('number_one').getValue();
            var vNumber2 = this.getView().byId('number_two').getValue();

            if (vNumber1 > vNumber2)
            {
                alert('크다')
            }
            else if (vNumber1 == vNumber2)
            {
                alert('같다')
            }
            else 
                alert('작다')
        },

        input_check: function()
        {
            var vArray = this.getView().byId('array').getValue();

            var aNumber = [10, 20, 30 ,40 ,50];

            for (var i in aNumber)
            {
                if (aNumber[i] == vArray)
                {
                    alert("Match")
                }
            }
        }
    });
});