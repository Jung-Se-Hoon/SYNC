sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/m/MessageToast"
],
function (Controller, Text, MessageToast) {
    "use strict";

    return Controller.extend("js.edu.jsedu.controller.View1", {

        onInit: function () 
        {
        //     new Text({
        //         text: "SYNC",
        //         textAlign: "Center"
        // }).placeeAt("content");
        },

        // onMsg: function ()
        // {
        //     alert("눌렀냐?");
        // },

        // onName: function () 
        // {
        //     alert("정세훈");    
        // },

        // onMsg2: function ()
        // {
        //    MessageToast.show("졸려");
        // }

        onTest1: function () 
        {
            alert("딩동댕");
        },

        onTest2: function ()
        {
            MessageToast.show("설정완료");
        }

    });
});
