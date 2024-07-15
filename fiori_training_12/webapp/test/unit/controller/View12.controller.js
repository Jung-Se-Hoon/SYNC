/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_12/controller/View12.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View12 Controller");

	QUnit.test("I should test the View12 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
