sap.ui.define(
    [
      "./BaseController",
        // "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.app.blogplatform.controller.View3", {
        onInit: function() {
        },
        
        handleUserNamePress2 : function() {
          window.history.back();
        },
        
      });
    }
  );
  