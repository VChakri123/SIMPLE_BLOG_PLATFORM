sap.ui.define([
	"./BaseController",
    // "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
],
function (Controller,JSONModel,Fragment) {
    "use strict";

    return Controller.extend("com.app.blogplatform.controller.HomePage", {
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("com/app/blogplatform/model/data.json"));
            this.getView().setModel(oModel);
        },

		onSideNavButtonPress: function () {
			var oToolPage = this.byId("toolPage");
			var bSideExpanded = oToolPage.getSideExpanded();
			this._setToggleButtonTooltip(bSideExpanded);
			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		onItemSelect: function (oEvent) {
			var oItem = oEvent.getParameter("item");
			this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
		},
		
		_setToggleButtonTooltip: function (bLarge) {
			var oToggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		},

		handleUserNamePress1 : function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView3")
        },

		handleUserNamePress2 : function() {
			window.history.back();
		},



		onAvatarPressed : function(oEvent){
			var oButton = oEvent.getSource(),
			oView = this.getView();
	 
		  // create popover
		  if (!this._pPopover) {
			this._pPopover = Fragment.load({
			  id: oView.getId(),
			  name: "com.app.blogplatform.fragments.PopOver",
			  controller: this
			}).then(function(oPopover){
			  oView.addDependent(oPopover);
			  return oPopover;
			});
		  }
	 
		  this._pPopover.then(function(oPopover){
			oPopover.openBy(oButton);
		  });
		},
	 
		
    });
});
