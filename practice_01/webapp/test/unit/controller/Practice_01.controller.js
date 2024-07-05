/*global QUnit*/

sap.ui.define([
	"practice_01/controller/Practice_01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Practice_01 Controller");

	QUnit.test("I should test the Practice_01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
