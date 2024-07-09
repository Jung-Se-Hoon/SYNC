/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"synccl5/fiori_study/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
