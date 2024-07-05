/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_04/controller/TrnView04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TrnView04 Controller");

	QUnit.test("I should test the TrnView04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
