sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("invoiceStatusA");
				case "B":
					return resourceBundle.getText("invoiceStatusB");
				case "C":
					return resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		},

		tileTitle: function (iTileNumber) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sText = "Tiles.tile"+iTileNumber+".title"; 
			return resourceBundle.getText(sText); 
		},

		infoTitle: function (iTileNumber) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sText = "Tiles.tile"+iTileNumber+".info";
			return resourceBundle.getText(sText);
		}
	};
});