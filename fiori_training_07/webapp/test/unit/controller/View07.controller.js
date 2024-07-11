/*global QUnit*/

sap.ui.define([
	"sync5cl5/fioir_training_07/controller/View07.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View07 Controller");

	QUnit.test("I should test the View07 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
