/*global QUnit*/

sap.ui.define([
	"fiori_exercise_01/fiori_exercise_01/controller/fiori_exercise_01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("fiori_exercise_01 Controller");

	QUnit.test("I should test the fiori_exercise_01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
