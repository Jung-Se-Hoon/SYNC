/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_03/controller/Training3View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Training3View Controller");

	QUnit.test("I should test the Training3View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
