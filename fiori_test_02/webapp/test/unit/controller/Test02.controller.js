/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_test_02/controller/Test02.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test02 Controller");

	QUnit.test("I should test the Test02 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
