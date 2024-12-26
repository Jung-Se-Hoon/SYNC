/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_test_01/controller/Test01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test01 Controller");

	QUnit.test("I should test the Test01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
