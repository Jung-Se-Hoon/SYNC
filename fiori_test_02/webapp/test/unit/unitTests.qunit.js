/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync5cl5/fiori_test_02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
