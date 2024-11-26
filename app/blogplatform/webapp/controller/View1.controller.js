sap.ui.define(
    [
      "./BaseController",
        // "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.app.blogplatform.controller.View1", {
        onInit: function() {
        },

        AvailableBooksBtn : function() {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteHomePage")

        }
      });
    }
  );
  