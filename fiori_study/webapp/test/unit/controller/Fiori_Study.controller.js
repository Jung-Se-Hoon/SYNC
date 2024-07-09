/*global QUnit*/

sap.ui.define([
	"synccl5/fiori_study/controller/Fiori_Study.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Fiori_Study Controller");

	QUnit.test("I should test the Fiori_Study controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
