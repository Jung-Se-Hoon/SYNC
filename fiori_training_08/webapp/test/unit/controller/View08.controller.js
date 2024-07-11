/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_08/controller/View08.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View08 Controller");

	QUnit.test("I should test the View08 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
