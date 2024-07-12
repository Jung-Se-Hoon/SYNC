/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_10/controller/View10.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View10 Controller");

	QUnit.test("I should test the View10 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
