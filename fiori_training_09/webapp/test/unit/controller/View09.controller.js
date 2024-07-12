/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_09/controller/View09.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View09 Controller");

	QUnit.test("I should test the View09 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
