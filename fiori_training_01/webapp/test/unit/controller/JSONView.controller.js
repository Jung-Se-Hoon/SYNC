/*global QUnit*/

sap.ui.define([
	"sync5cl5/fiori_training_01/controller/JSONView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JSONView Controller");

	QUnit.test("I should test the JSONView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
