sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining06.controller.View05", {
        onInit: function () {

            // let aAirline = ['AA', 'KA', 'LH', "DL", "QA"];

            // for ( var i in aAirline)
            // {
            //     if (aAirline[i] == 'KA')
            //     {
            //         console.log("OK")
            //     }
            //     else if (aAirline[i] == 'DL')
            //     {
            //         console.log("Delta Air")
            //     }
            //     else if(aAirline[i] == 'QA')
            //     {
            //         console.log("Qatar Air")
            //     }
            //     else
            //     {
            //         console.log("No")
            //     }
            // }

            // for ( var i in aAirline)
                
            //     {
            //         switch(aAirline[i])
            //         {
            //             case 'KA':
            //                 console.log('Korea Air')
            //                 break;
            //             case 'DL':
            //                 console.log('Delta Air')
            //                 break;
            //             case 'QA':
            //                 console.log('Qatar Air')
            //                 break;
            //             default:
            //                 console.log('Nothing')
            //         }
            //     }

        },

        // Count: function()
        // {
        //     var vWalk = this.getView().byId("Walking").getValue()
            
        //     if (vWalk <= 10)
        //     {
        //         alert("걸어라 걸어 쫌~")
        //     }
        //     else if (vWalk > 10 && vWalk <= 50)
        //     {
        //         alert("걷다 말았냐?")
        //     }
        //     else if (vWalk > 50 && vWalk <= 100)
        //     {
        //         alert("쫌 걸었네")
        //     }
        //     else
        //     {
        //         alert("많이도 걸었네")
        //     }
        // }

        odd_check: function()
        {
            var vNumber = parseInt(this.getView().byId("number").getValue()),
                vRemain = 0;

                vRemain = vNumber % 2;

                // if (vRemain == 0)
                // {
                //     alert("짝수입니다")
                // }
                // else
                // {
                //     alert("홀수입니다")
                // }

                switch(vRemain)
                {
                    case 0:
                        alert("짝수입니다")
                        break;
                    case 1:
                        alert("홀수입니다")
                        break;
                }
        },

        Check_month: function()
        {
            var vMonth = this.getView().byId("Month").getValue();

            if (vMonth >= 9 && vMonth <= 11)
            {
                MessageToast.show("야장에서 술먹기 좋은 가을이네")
            }
            else if (vMonth >= 6 && vMonth <= 8)
            {
                MessageToast.show("야장에서 술먹다간 쓰러지는 여름이네")
            }
            else if (vMonth >= 3 && vMonth <= 5)
            {
                MessageToast.show("편의점에서 술먹기 좋은 봄이네")
            }
            else
            {
                MessageToast.show("편의점서 술먹다간 입돌아갈 겨울이네")
            }
        },

        Check_Info: function()
        {
            var vName = this.getView().byId("Name").getValue(),
                vClass = this.getView().byId("Class").getValue(),
                vNumber = this.getView().byId("Number").getValue();

                if (vName == "정세훈")
                {
                    if(vClass == '5')
                    {
                        if(vNumber == '18')
                        {
                            alert("정보가 맞습니다.")
                        }
                        else{
                            alert("번호가 맞지 않습니다.")
                        }
                    }
                    else
                    {
                        alert("반이 맞지 않습니다.")
                    }
                }
                else
                {
                    alert("이름이 맞지 않습니다.")
                }
        },

        Login: function()
        {
            var vId = "sehoon", vPw = "0222",

            Input1 = this.getView().byId("Id").getValue(),
            Input2 = this.getView().byId("Pw").getValue();

            if (Input1 == vId)
            {
                if (Input2 == vPw)
                {
                    MessageToast.show(`${vId} 님 반갑습니다.`)
                }
                else
                {
                    MessageToast.show("암호가 틀립니다.")
                }
            }
            else
            {
                MessageToast.show("아이디가 없습니다.")
            }
        }
    });
});
