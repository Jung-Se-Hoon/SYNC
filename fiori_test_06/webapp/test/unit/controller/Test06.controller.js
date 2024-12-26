/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_test_06/controller/Test06.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test06 Controller");

	QUnit.test("I should test the Test06 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
