sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/tiles.json");
			this.getView().setModel(oModel, "lang");
			
			// var oModelUser = new sap.ui.model.json.JSONModel();
			// oModelUser.loadData("model/user.json");
			// this.getView().setModel(oModelUser, "user");

			// var sLng = window.navigator.language;
			//var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
			//var oBundle = jQuery.sap.resources({url : "res/i18n.properties", locale: sLocale});
			//sap.ui.getCore().getConfiguration().applySettings({language: sLng });
		},

		onTileClick : function(evt){
			//Setujemo korisnicke podatke obavezno.
			var oTile = evt.getSource();
			var sChoice = oTile.getAriaLabel();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(sChoice);
		}

	});
});