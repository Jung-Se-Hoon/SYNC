sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sync5.cl5.fioritraining03.controller.Training3View", {
        onInit: function () 
        {
            
        },

        // goCalc: function ()
        // {
        //     var vValue1 = this.getView().byId("input_val1").getValue(),
        //         vValue2 = this.getView().byId("input_val2").getValue(),
        //         vValue3 = this.getView().byId("input_val3").getValue(),
        //         vValue4 = ( ( parseInt(vValue1) + parseInt(vValue2) ) * parseInt(vValue3) ) / 2;

        //         this.getView().byId("output_val").setValue(vValue4);
        // },

        // goClear: function ()
        // {
        //     this.getView().byId("input_val1").setValue();
        //     this.getView().byId("input_val2").setValue();
        //     this.getView().byId("input_val3").setValue();
        //     this.getView().byId("output_val").setValue();
        // }

        square: function ()
        {
            var vWidth = this.getView().byId("width_leng").getValue();
            var vHeight = this.getView().byId("height_leng").getValue();
            var vArea = (parseInt(vWidth) * parseInt(vHeight));


            this.getView().byId("area").setValue(vArea);
        },

        calc: function ()
        {
            var vPrice = this.getView().byId("price").getValue();
            var vDiscount = this.getView().byId("discount").getValue();
            var vDiscountPrice = (parseFloat(vPrice) * (1 - parseFloat(vDiscount)/100));

            this.getView().byId("discount_price").setValue(vDiscountPrice);
        }
    });
});
