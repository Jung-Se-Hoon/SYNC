/*global QUnit*/

sap.ui.define([
	"sync5cl/project1234/controller/View1234.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1234 Controller");

	QUnit.test("I should test the View1234 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
