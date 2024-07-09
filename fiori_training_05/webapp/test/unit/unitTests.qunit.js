/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync5cl5/fiori_training_05/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
