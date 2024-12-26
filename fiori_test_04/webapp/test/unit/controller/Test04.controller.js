/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_test_04/controller/Test04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test04 Controller");

	QUnit.test("I should test the Test04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
