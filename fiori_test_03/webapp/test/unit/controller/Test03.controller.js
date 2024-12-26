/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_test_03/controller/Test03.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test03 Controller");

	QUnit.test("I should test the Test03 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
