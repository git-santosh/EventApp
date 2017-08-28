'use strict';
eventApp.factory('notification',function(toastr){
    return{
        success:function(text){
            toastr.success(text,"Success");
        },
        error:function(text){
             toastr.error(text, "Error");
        }
    };
})