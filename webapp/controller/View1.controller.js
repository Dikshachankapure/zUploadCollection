sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/UploadCollectionParameter",
], function (Controller,UploadCollectionParameter) {
	"use strict";

	return Controller.extend("demo.zUploadCollectionDemo.controller.View1", {
		onInit: function () {
		var oModel = this.getOwnerComponent().getModel("AttachmentDataSet");
			this.getView().setModel(oModel,"oModelAttachment");
		}
	});
});