/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fiori_exercise_01/fiori_exercise_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});