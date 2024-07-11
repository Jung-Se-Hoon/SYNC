/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync5cl5/fioir_training_07/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
