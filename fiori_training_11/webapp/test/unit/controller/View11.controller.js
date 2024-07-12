/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_11/controller/View11.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View11 Controller");

	QUnit.test("I should test the View11 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
