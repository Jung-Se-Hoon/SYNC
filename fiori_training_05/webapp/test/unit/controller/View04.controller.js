/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_05/controller/View04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View04 Controller");

	QUnit.test("I should test the View04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
