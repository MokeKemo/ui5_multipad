//CREATED BY NMORACA :)))
// sap.ui.define([
//    "sap/ui/core/mvc/Controller",
//    "sap/m/MessageToast"
// ], 

// function (Controller, MessageToast) {
//    "use strict";
//    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
//       onShowHello : function () {
//          MessageToast.show("Message!!!");
//       }
//    });
// }); STEP ONE IN CREATING CONTROLLER AND USING MessageToast - OFFICIAL WALKTHROUGH UI5 

// sap.ui.define([
//    "sap/ui/core/mvc/Controller",
//    "sap/m/MessageToast",
//    "sap/ui/model/json/JSONModel"
// ], function (Controller, MessageToast, JSONModel) {
//    "use strict";
//    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
//       onInit : function () {
//          // set data model on view
//          var oData = {
//             recipient : {
//                name : "World"
//             }
//          };
//          var oModel = new JSONModel(oData);
//          this.getView().setModel(oModel);
//       },
//       onShowHello : function () {
//          MessageToast.show("Hello World");
//       }
//    });
// }); STEP TWO IN CONTROLLER - MORE LIKE EXAMPLE FOR ITSELF:)

// sap.ui.define([
//    "sap/ui/core/mvc/Controller",
//    "sap/m/MessageToast",
//    "sap/ui/model/json/JSONModel",
//    "sap/ui/model/resource/ResourceModel"
// ], function (Controller, MessageToast, JSONModel, ResourceModel) {
//    "use strict";
//    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
//      onInit : function () {
//          // set data model on view
//          var oData = {
//             recipient : {
//                name : "World"
//             }
//          };
//          var oModel = new JSONModel(oData);
//          this.getView().setModel(oModel);
//          // set i18n model on view
//          var i18nModel = new ResourceModel({
//             bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
//             supportedLocales: [""],
//             fallbackLocale: ""
//          });
//          this.getView().setModel(i18nModel, "i18n");
//       },
//       onShowHello : function () {
//          // read msg from i18n model
//          var oBundle = this.getView().getModel("i18n").getResourceBundle();
//          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
//          // show message
//          MessageToast.show(sMsg);
//       }
//    });
// }); PART FOR TRANSLATABLE TEXTS FROM WALKTHROUGH

sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/core/routing/History",
   "sap/ui/core/UIComponent",
   "sap/m/MessageToast"
], function (Controller, History, UIComponent, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      
      onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
      },
      
      onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
		},

   });
});

//STEP 10 IN WALKTHROUGH - DESCRIPTOR FOR APPLICATIONS A.K.A. MANIFEST.JSON