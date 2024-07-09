/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_06/controller/View05.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View05 Controller");

	QUnit.test("I should test the View05 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
