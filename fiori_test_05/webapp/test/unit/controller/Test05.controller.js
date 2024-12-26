/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_test_05/controller/Test05.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test05 Controller");

	QUnit.test("I should test the Test05 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
